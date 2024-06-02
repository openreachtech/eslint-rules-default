import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export const core = require('./configurations/core')
export const disableCoreStylistic = require('./configurations/disable-core-stylistic')
export const stylistic = require('./configurations/stylistic/all')
export const stylisticJs = require('./configurations/stylistic/js')
export const stylisticPlus = require('./configurations/stylistic/plus')

export default {
  core,
  disableCoreStylistic,
  stylistic,
  stylisticJs,
  stylisticPlus,
}
