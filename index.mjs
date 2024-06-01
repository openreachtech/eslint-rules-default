import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export const core = require('./rules/core')
export const disableCoreStylistic = require('./rules/disable-core-stylistic')
export const stylisticJs = require('./rules/stylistic/js')
export const stylisticPlus = require('./rules/stylistic/plus')

export default {
  core,
  disableCoreStylistic,
  stylisticJs,
  stylisticPlus,
}
