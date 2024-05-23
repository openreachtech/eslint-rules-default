import jestPlugin from 'eslint-plugin-jest'

const jestFlatConfigRecommended = jestPlugin.configs['flat/recommended']

export default {
  ...jestFlatConfigRecommended,

  rules: {
    ...jestFlatConfigRecommended.rules,

    // TODO: Add Jest plugin rules here
  },
}
