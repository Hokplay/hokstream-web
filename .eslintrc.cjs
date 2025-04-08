/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:valtio/recommended',
    'plugin:prettier/recommended',
    'plugin:jest-extended/all',
    'plugin:jsx-plus/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      excludedFiles: ['e2e/**/*'],
      extends: ['plugin:testing-library/react']
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_'
          }
        ],
        '@typescript-eslint/no-unsafe-function-type': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }]
      }
    }
  ],
  globals: {
    google: 'readonly'
  },
  rules: {
    'prettier/prettier': 'warn',

    // https://eslint.org/docs/latest/rules/
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],

    // https://www.npmjs.com/package/eslint-plugin-import
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: true,
        allowObject: true
      }
    ],
    'import/no-webpack-loader-syntax': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react
    'react/prop-types': 'off',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/no-unknown-property': 'off'
  }
};
