module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'eslint-config-prettier',
    'prettier/react',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier', 'simple-import-sort'],
  rules: {
    // 'react/jsx-filename-extension': [1, { extensions: [.js, .jsx, .ts, .tsx] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],

    // We will use TypeScript's types for component props instead
    // 'react/prop-types': 'off',

    // 'import/prefer-default-export': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // 'implicit-arrow-linebreak': ['error', 'below'],

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // space-before-function-paren: off,
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    // 'comma-dangle': 'off',
    'arrow-parens': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
};
