import stylistic from '@stylistic/eslint-plugin'

import stylisticAll from '../../../configurations/stylistic.js'

describe('stylistic.js', () => {
  describe('to contain all rules of stylistic', () => {
    test('should contain js rules', () => {
      const expectedKeys = Object.keys(stylistic.configs.all.rules)
        .concat([
          '@stylistic/jsx-quotes',
          '@stylistic/line-comment-position',
          '@stylistic/max-len',
          '@stylistic/max-statements-per-line',
          '@stylistic/no-mixed-operators',
          '@stylistic/no-mixed-spaces-and-tabs',
          '@stylistic/no-tabs',
        ])

      const stylisticAllKeys = Object.keys(stylisticAll.rules)

      expect(stylisticAllKeys)
        .toEqual(expectedKeys)
    })
  })
})
