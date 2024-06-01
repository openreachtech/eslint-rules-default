import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export const core = require('./rules/core')
export const disableCoreStylistic = require('./rules/disable-core-stylistic')
export const stylistic = require('./rules/stylistic/all')
export const stylisticJs = require('./rules/stylistic/js')
export const stylisticPlus = require('./rules/stylistic/plus')

export default {
  core,
  disableCoreStylistic,
  stylistic,
  stylisticJs,
  stylisticPlus,
}
