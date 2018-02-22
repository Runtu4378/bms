// https://eslint.org/docs/user-guide/configuring
const env = 'development'
const switcher = env === 'production' ? 'error' : "off"

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
    'no-console':  switcher,
    'no-debugger': switcher,
    'comma-dangle': ['error', 'always-multiline'],
    "indent": [2, 2, {
      "SwitchCase": 1
    }], // 缩进为2
  },
}
