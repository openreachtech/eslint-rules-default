import core from '../../configurations/core.js'
import disableCoreStylistic from '../../configurations/disable-core-stylistic.js'

import stylisticJs from '../../configurations/stylistic/js.js'
import stylisticPlus from '../../configurations/stylistic/plus.js'

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
