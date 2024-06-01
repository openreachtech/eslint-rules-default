'use strict'

const core = require('./rules/core.js')
const disableCoreStylistic = require('./rules/disable-core-stylistic.js')
const stylisticJs = require('./rules/stylistic/js.js')
const stylisticPlus = require('./rules/stylistic/plus.js')

module.exports = {
  core,
  disableCoreStylistic,
  stylisticJs,
  stylisticPlus,
}
