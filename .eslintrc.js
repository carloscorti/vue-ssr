module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true
    },
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: ['html'],

  ignorePatterns: ['node_modules/'],

  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': [
      'warn',
      { allow: ['clear', 'info', 'error', 'dir', 'trace'] }
    ],
    curly: 'error',
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    strict: 'error',
    'symbol-description': 'error',
    yoda: ['error', 'never', { exceptRange: true }],
    'space-before-function-paren': false
  }
};
