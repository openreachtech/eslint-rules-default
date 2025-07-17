import core from '../../configurations/core.js'
import disableCoreStylistic from '../../configurations/disable-core-stylistic.js'
import stylistic from '../../configurations/stylistic/all.js'
import stylisticJs from '../../configurations/stylistic/js.js'
import stylisticPlus from '../../configurations/stylistic/plus.js'

import mainExports from '../../index.js'

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
