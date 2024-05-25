import core from './rules/core'
import disableCoreStylistic from './rules/disable-core-stylistic'
import stylisticJs from './rules/plugins/stylistic/js'
import stylisticPlus from './rules/plugins/stylistic/plus'
import jestPlugin from './rules/plugins/jest'
import jsdocPlugin from './rules/plugins/jsdoc'

export default {
  core,
  disableCoreStylistic,
  stylisticJs,
  stylisticPlus,
  jest: jestPlugin,
  jsdoc: jsdocPlugin,
}
