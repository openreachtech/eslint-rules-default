'use strict'

const stylistic = require('@stylistic/eslint-plugin')

const jsRules = require('./default-rules/js')
const plusRules = require('./default-rules/plus')

module.exports = {
  plugins: {
    '@stylistic': stylistic,
  },

  rules: {
    ...stylistic.configs['all-flat'].rules,

    ...jsRules,
    ...plusRules,
  },
}
