const eslintScope = require('eslint-scope');

module.exports = {
  // ref: https://github.com/jsx-eslint/jsx-ast-utils/blob/v3.3.5/src/propName.js
  propName(prop = {}) {
    if (!prop.type || prop.type !== 'JSXAttribute') {
      throw new Error(
        'The prop must be a JSXAttribute collected by the AST parser.'
      );
    }

    if (prop.name.type === 'JSXNamespacedName') {
      return `${prop.name.namespace.name}:${prop.name.name.name}`;
    }

    return prop.name.name;
  },
  isVariable(str) {
    if (typeof str !== 'string') return false;
    if (str.trim() !== str) return false;

    try {
      new Function(str, 'var ' + str);
    } catch {
      return false;
    }
    return true;
  },

  /**
   * add variables to current scope for 'x-for/x-slot' directive
   * @param {object} context context
   * @param {Array} vars variables decclared by x-for/x-slot directive
   */
  addDeclaredVariables(context, vars) {
    const globalScope = context.getScope();
    vars.forEach(id => {
      let variable = globalScope.set.get(id);

      if (!variable) {
        variable = new eslintScope.Variable(id, globalScope);
        variable.eslintUsed = true;

        globalScope.variables.push(variable);
        globalScope.set.set(id, variable);
      }
    });

    /*
     * "through" contains all references which definitions cannot be found.
     * So, here remove the variables from current "through" scope.
     */
    globalScope.through = globalScope.through.filter(reference => {
      const name = reference.identifier.name;
      const variable = globalScope.set.get(name);

      if (variable) {
        /*
         * Links the variable and the reference.
         * And this reference is removed from `Scope#through`.
         */
        reference.resolved = variable;
        variable.references.push(reference);

        return false;
      }
      return true;
    });
  }
};
