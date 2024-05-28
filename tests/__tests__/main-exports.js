'use strict'

const core = require('../../rules/core')
const disableCoreStylistic = require('../../rules/disable-core-stylistic')
const stylisticJs = require('../../rules/plugins/stylistic/js')
const stylisticPlus = require('../../rules/plugins/stylistic/plus')

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
