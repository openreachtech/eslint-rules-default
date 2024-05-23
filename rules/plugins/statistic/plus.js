import stylistic from '@stylistic/eslint-plugin-plus'

export default {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/indent-binary-ops': [
      'error',
      2,
    ],
  },
}
