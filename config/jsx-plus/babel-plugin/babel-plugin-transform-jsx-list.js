// ref: https://github.com/jsx-plus/babel-plugin-transform-jsx-list/blob/v0.1.2/src/index.js
const DIRECTIVE = 'x-for';

export default function ({ types: t }) {
  function getAttrXFor(node) {
    return (
      t.isJSXElement(node) &&
      node.openingElement.attributes.length > 0 &&
      node.openingElement.attributes.find(
        jsxAttr =>
          t.isJSXAttribute(jsxAttr) &&
          t.isJSXIdentifier(jsxAttr.name, { name: DIRECTIVE })
      )
    );
  }

  return {
    visitor: {
      JSXElement(path) {
        const { node, parentPath } = path;

        if (node.__listHandled) return;
        node.__listHandled = true;

        const attrXFor = getAttrXFor(node);
        if (attrXFor) {
          // Remove x-for attribute
          node.openingElement.attributes.splice(
            node.openingElement.attributes.indexOf(attrXFor),
            1
          );
          // Check stynax.
          if (!t.isJSXExpressionContainer(attrXFor.value)) {
            // TODO: throw err prettier.
            console.warn('ignore x-for due to stynax error.');
            return;
          }
          const { expression } = attrXFor.value;
          let params = [];
          let iterValue;

          if (t.isBinaryExpression(expression, { operator: 'in' })) {
            // x-for={(item, index) in value}
            const { left, right } = expression;
            iterValue = right;
            if (t.isSequenceExpression(left)) {
              if (t.isObjectExpression(left.expressions[0])) {
                // x-for={({ id }, key) in value}
                params = [
                  t.objectPattern(left.expressions[0].properties),
                  left.expressions[1]
                ];
              } else {
                // x-for={(item, key) in value}
                params = left.expressions;
              }
            } else if (t.isIdentifier(left)) {
              // x-for={item in value}
              params = [left];
            } else if (t.isObjectExpression(left)) {
              // x-for={({ id }) in value}
              params = [t.objectPattern(left.properties)];
            } else {
              // x-for={??? in value}
              throw new Error('Stynax error of x-for.');
            }
          } else {
            // x-for={value}, x-for={callExp()}, ...
            iterValue = expression;
          }

          // `value.map(render)`
          const replacer = t.callExpression(
            t.memberExpression(iterValue, t.identifier('map')),
            [
              t.arrowFunctionExpression(
                params,
                t.blockStatement([
                  t.returnStatement(t.parenthesizedExpression(node))
                ])
              )
            ]
          );
          if (parentPath.isJSXElement()) {
            path.replaceWith(t.jsxExpressionContainer(replacer));
          } else {
            path.replaceWith(replacer);
          }
        }
      }
    }
  };
}
