import core from '../../rules/core'
import disableCoreStylistic from '../../rules/disable-core-stylistic'
import stylisticJs from '../../rules/plugins/stylistic/js'
import stylisticPlus from '../../rules/plugins/stylistic/plus'
import jestPlugin from '../../rules/plugins/jest'
import jsdocPlugin from '../../rules/plugins/jsdoc'

import mainExports from '../../index'

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
      {
        args: {
          propertyName: 'jest',
          ruleSet: jestPlugin,
        },
      },
      {
        args: {
          propertyName: 'jsdoc',
          ruleSet: jsdocPlugin,
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
