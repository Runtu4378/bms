// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:vue-libs/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'eslint-plugin',
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'indent': ["error", 2],
    'quotes': ["error", "single"],
    'semi': ["error", "never"],
    // allow debugger during development
    'no-console':  'error',
    'no-debugger': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },
}
