'use strict'

const stylistic = require('@stylistic/eslint-plugin-plus')

module.exports = {
  plugins: {
    '@stylistic/plus': stylistic,
  },
  rules: {
    '@stylistic/plus/indent-binary-ops': [
      'error',
      2,
    ],
    '@stylistic/plus/type-generic-spacing': [
      'error',
    ],
    '@stylistic/plus/type-named-tuple-spacing': [
      'error',
    ],
  },
}
