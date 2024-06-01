'use strict'

const stylisticAll = require('../../../../rules/stylistic/all')

const jsRules = require('../../../../rules/stylistic/default-rules/js')
const plusRules = require('../../../../rules/stylistic/default-rules/plus')

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
