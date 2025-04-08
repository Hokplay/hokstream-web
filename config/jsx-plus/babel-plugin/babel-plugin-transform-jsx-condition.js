// ref: https://github.com/jsx-plus/babel-plugin-transform-jsx-condition/blob/v0.1.3-0/src/index.js
const directiveIf = 'x-if';
const directiveElseif = 'x-elseif';
const directiveElse = 'x-else';

export default function babelPluginTransformJsxCondition({ types: t }) {
  /**
   * Get condition type, enum of {if|elseif|else|null}
   */
  function getCondition(jsxElement) {
    if (!t.isJSXOpeningElement(jsxElement.openingElement)) {
      return null;
    }

    const { attributes } = jsxElement.openingElement;

    for (let i = 0, l = attributes.length; i < l; i++) {
      if (!t.isJSXAttribute(attributes[i])) continue;

      // eslint-disable-next-line default-case
      switch (attributes[i].name.name) {
        case directiveIf:
        case directiveElseif:
        case directiveElse:
          return {
            type: attributes[i].name.name,
            value: t.isJSXExpressionContainer(attributes[i].value)
              ? attributes[i].value.expression
              : attributes[i].value,
            index: i
          };
      }
    }
    return null;
  }

  function transformToConditionalExpression(conditions) {
    return conditions.reduceRight((previous, current) => {
      if (current.type === directiveElse) return current.jsxElement;

      return t.conditionalExpression(
        current.condition,
        current.jsxElement,
        previous === null ? t.nullLiteral() : previous
      );
    }, null);
  }

  return {
    visitor: {
      JSXElement(path) {
        const { node, parentPath } = path;
        const condition = getCondition(node);
        if (
          !(
            condition !== null &&
            condition.value !== null &&
            condition.type === directiveIf
          )
        ) {
          return;
        }

        const conditions = [];
        const { type, value, index } = condition;

        node.openingElement.attributes.splice(index, 1);

        conditions.push({
          type,
          condition: value,
          jsxElement: node
        });

        let nextJSXElPath = path;
        let nextJSXElCondition;

        do {
          nextJSXElPath = nextJSXElPath.getSibling(nextJSXElPath.key + 1);

          if (
            nextJSXElPath.isJSXText() &&
            nextJSXElPath.node.value.trim() === ''
          ) {
            continue;
          }

          if (!nextJSXElPath.isJSXElement()) break;

          nextJSXElCondition = getCondition(nextJSXElPath.node);

          if (
            nextJSXElCondition === null ||
            nextJSXElCondition.type === directiveIf
          ) {
            break;
          }

          conditions.push({
            type: nextJSXElCondition.type,
            condition:
              nextJSXElCondition.type === directiveElseif
                ? nextJSXElCondition.value
                : t.booleanLiteral(true),
            jsxElement: nextJSXElPath.node
          });

          nextJSXElPath.node.openingElement.attributes.splice(
            nextJSXElCondition.index,
            1
          );
          nextJSXElPath.remove();
          // eslint-disable-next-line no-constant-condition
        } while (true);

        const conditionalExpression =
          transformToConditionalExpression(conditions);

        if (parentPath.isJSXElement() || parentPath.isJSXFragment()) {
          path.replaceWith(t.jsxExpressionContainer(conditionalExpression));
        } else {
          path.replaceWith(conditionalExpression);
        }
      }
    }
  };
}
