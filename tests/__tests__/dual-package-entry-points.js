'use strict'

const core = require('../../configurations/core.js')
const disableCoreStylistic = require('../../configurations/disable-core-stylistic.js')
const stylisticJs = require('../../configurations/stylistic/js.js')
const stylisticPlus = require('../../configurations/stylistic/plus.js')

describe('dual entry points', () => {
  test('to exist', async () => {
    const { default: dualEntryPoints } = await import('../../index.mjs')

    expect(dualEntryPoints)
      .toBeTruthy()
  })

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

    test.each(cases)('property: $args.propertyName', async ({ args }) => {
      const { default: dualEntryPoints } = await import('../../index.mjs')

      expect(dualEntryPoints)
        .toHaveProperty(
          args.propertyName,
          args.ruleSet
        )
    })
  })
})
