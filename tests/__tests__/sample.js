import eslintConfig from '../../eslint.config'

describe('sample', () => {
  test('to be', () => {
    expect(true)
      .toBeTruthy()
  })
})

describe('eslintConfig', () => {
  test('to exist', () => {
    expect(eslintConfig)
      .toBeTruthy()
  })
})
