'use strict'

const core = require('../../rules/core')
const disableCoreStylistic = require('../../rules/disable-core-stylistic')
const stylistic = require('../../rules/stylistic/all')
const stylisticJs = require('../../rules/stylistic/js')
const stylisticPlus = require('../../rules/stylistic/plus')

const mainExports = require('../../index')

describe('main exports', () => {
  describe('to have property', () => {
    const cases = [
      {
        args: {
          propertyName: 'core',
          ruleSet: core,
        },
      },
      {
        args: {
          propertyName: 'disableCoreStylistic',
          ruleSet: disableCoreStylistic,
        },
      },
      {
        args: {
          propertyName: 'stylistic',
          ruleSet: stylistic,
        },
      },
      {
        args: {
          propertyName: 'stylisticJs',
          ruleSet: stylisticJs,
        },
      },
      {
        args: {
          propertyName: 'stylisticPlus',
          ruleSet: stylisticPlus,
        },
      },
    ]

    test.each(cases)('property: $args.propertyName', ({ args }) => {
      expect(mainExports)
        .toHaveProperty(
          args.propertyName,
          args.ruleSet
        )
    })
  })
})
