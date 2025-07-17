import stylistic from '@stylistic/eslint-plugin'

import jsRules from './default-rules/js.js'
import plusRules from './default-rules/plus.js'

export default {
  plugins: {
    '@stylistic': stylistic,
  },

  rules: {
    ...stylistic.configs['all-flat'].rules,

    ...jsRules,
    ...plusRules,
  },
}
