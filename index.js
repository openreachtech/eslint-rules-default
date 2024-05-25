import core from './rules/core.js'
import disableCoreStylistic from './rules/disable-core-stylistic.js'
import stylisticJs from './rules/plugins/stylistic/js.js'
import stylisticPlus from './rules/plugins/stylistic/plus.js'
import jestPlugin from './rules/plugins/jest.js'
import jsdocPlugin from './rules/plugins/jsdoc.js'

export default {
  core,
  disableCoreStylistic,
  stylisticJs,
  stylisticPlus,
  jest: jestPlugin,
  jsdoc: jsdocPlugin,
}
