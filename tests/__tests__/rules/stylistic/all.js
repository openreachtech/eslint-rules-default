import stylisticAll from '../../../../configurations/stylistic/all.js'

import jsRules from '../../../../configurations/stylistic/default-rules/js.js'
import plusRules from '../../../../configurations/stylistic/default-rules/plus.js'

describe('stylistic/all', () => {
  describe('to contain default rules of js', () => {
    test('should contain js rules', () => {
      expect(stylisticAll.rules)
        .toMatchObject(jsRules)
    })

    test('should contain plus rules of plus', () => {
      expect(stylisticAll.rules)
        .toMatchObject(plusRules)
    })
  })
})
