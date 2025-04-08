// ref: https://github.com/jsx-plus/babel-plugin-transform-jsx-class/blob/v0.1.3/src/index.js
const DIRECTIVE = 'x-class';
const helperImportedFrom = 'clsx'; // 原本是 'babel-runtime-jsx-plus'
const helperImportedName = 'clsx'; // 原本是 'classnames'

export default function babelPluginTransformJsxClass({ types: t }) {
  return {
    visitor: {
      Program(path) {
        path.__classHelperImported = false;
      },
      JSXOpeningElement(parentPath, state) {
        const attributePaths = parentPath.get('attributes') || [];
        const attributes = parentPath.node.attributes || [];
        const directive = state.opts.directive || DIRECTIVE;

        // eslint-disable-next-line array-callback-return
        attributePaths.some(function (path) {
          const { node } = path;
          if (t.isJSXIdentifier(node.name, { name: directive })) {
            const params = [];
            if (t.isJSXExpressionContainer(node.value))
              params.push(node.value.expression);
            else if (t.isStringLiteral(node.value)) params.push(node.value);

            const callExp = t.callExpression(
              t.identifier(helperImportedName),
              params
            );

            let classNameAttribute;
            for (let i = 0, l = attributes.length; i < l; i++) {
              if (t.isJSXIdentifier(attributes[i].name, { name: 'className' }))
                classNameAttribute = attributes[i];
            }

            if (classNameAttribute) {
              let prevVal;
              if (t.isJSXExpressionContainer(classNameAttribute.value))
                prevVal = classNameAttribute.value.expression;
              else if (t.isStringLiteral(classNameAttribute.value))
                prevVal = classNameAttribute.value;
              else prevVal = t.stringLiteral('');

              classNameAttribute.value = t.jsxExpressionContainer(
                t.binaryExpression(
                  '+',
                  t.binaryExpression('+', prevVal, t.stringLiteral(' ')),
                  callExp
                )
              );
            } else {
              attributes.push(
                t.jsxAttribute(
                  t.jsxIdentifier('className'),
                  t.jsxExpressionContainer(callExp)
                )
              );
            }

            path.remove();

            const rootPath = path.findParent(p => p.isProgram());
            if (rootPath.__classHelperImported === false) {
              const imported = t.identifier(helperImportedName);
              const importDeclaration = t.importDeclaration(
                [t.importDefaultSpecifier(imported)],
                t.stringLiteral(helperImportedFrom)
              );
              rootPath.unshiftContainer('body', importDeclaration);
              rootPath.__classHelperImported = true;
            }
            return true;
          }
        });
      }
    }
  };
}
