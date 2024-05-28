import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export const core = require('./rules/core')
export const disableCoreStylistic = require('./rules/disable-core-stylistic')
export const stylisticJs = require('./rules/plugins/stylistic/js')
export const stylisticPlus = require('./rules/plugins/stylistic/plus')
export const jsdoc = require('./rules/plugins/jsdoc')

export default {
  core,
  disableCoreStylistic,
  stylisticJs,
  stylisticPlus,
  jsdoc,
}
