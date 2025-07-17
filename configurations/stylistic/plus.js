import stylistic from '@stylistic/eslint-plugin'

export default {
  plugins: {
    '@stylistic/plus': stylistic,
  },
  rules: {
    '@stylistic/plus/indent-binary-ops': [
      'error',
      2,
    ],
    '@stylistic/plus/type-generic-spacing': [
      'error',
    ],
    '@stylistic/plus/type-named-tuple-spacing': [
      'error',
    ],
  },
}
