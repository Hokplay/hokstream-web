const validXFor = require('./rules/valid-x-for.js');

const plugin = {
  rules: {
    'valid-x-for': validXFor
  },
  configs: {
    recommended: {
      plugins: ['jsx-plus'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'jsx-plus/valid-x-for': 2
      }
    }
  }
};

module.exports = plugin;
