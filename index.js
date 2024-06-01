'use strict'

const core = require('./configurations/core.js')
const disableCoreStylistic = require('./configurations/disable-core-stylistic.js')
const stylistic = require('./configurations/stylistic/all.js')
const stylisticJs = require('./configurations/stylistic/js.js')
const stylisticPlus = require('./configurations/stylistic/plus.js')

module.exports = {
  core,
  disableCoreStylistic,
  stylistic,
  stylisticJs,
  stylisticPlus,
}
