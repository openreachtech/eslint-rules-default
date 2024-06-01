'use strict'

const disableCoreStylistic = require('../../../configurations/disable-core-stylistic')
const stylisticJs = require('../../../configurations/stylistic/js')

describe('disable-core-stylistic rules', () => {
  const cases = [
    {
      args: {
        disableRule: 'array-bracket-newline',
        stylisticRule: '@stylistic/js/array-bracket-newline',
      },
    },
    {
      args: {
        disableRule: 'array-bracket-spacing',
        stylisticRule: '@stylistic/js/array-bracket-spacing',
      },
    },
    {
      args: {
        disableRule: 'array-element-newline',
        stylisticRule: '@stylistic/js/array-element-newline',
      },
    },
    {
      args: {
        disableRule: 'arrow-parens',
        stylisticRule: '@stylistic/js/arrow-parens',
      },
    },
    {
      args: {
        disableRule: 'arrow-spacing',
        stylisticRule: '@stylistic/js/arrow-spacing',
      },
    },
    {
      args: {
        disableRule: 'block-spacing',
        stylisticRule: '@stylistic/js/block-spacing',
      },
    },
    {
      args: {
        disableRule: 'brace-style',
        stylisticRule: '@stylistic/js/brace-style',
      },
    },
    {
      args: {
        disableRule: 'comma-dangle',
        stylisticRule: '@stylistic/js/comma-dangle',
      },
    },
    {
      args: {
        disableRule: 'comma-spacing',
        stylisticRule: '@stylistic/js/comma-spacing',
      },
    },
    {
      args: {
        disableRule: 'comma-style',
        stylisticRule: '@stylistic/js/comma-style',
      },
    },
    {
      args: {
        disableRule: 'computed-property-spacing',
        stylisticRule: '@stylistic/js/computed-property-spacing',
      },
    },
    {
      args: {
        disableRule: 'dot-location',
        stylisticRule: '@stylistic/js/dot-location',
      },
    },
    {
      args: {
        disableRule: 'eol-last',
        stylisticRule: '@stylistic/js/eol-last',
      },
    },
    {
      args: {
        disableRule: 'function-call-argument-newline',
        stylisticRule: '@stylistic/js/function-call-argument-newline',
      },
    },
    {
      args: {
        disableRule: 'function-call-spacing',
        stylisticRule: '@stylistic/js/function-call-spacing',
      },
    },
    {
      args: {
        disableRule: 'function-paren-newline',
        stylisticRule: '@stylistic/js/function-paren-newline',
      },
    },
    {
      args: {
        disableRule: 'generator-star-spacing',
        stylisticRule: '@stylistic/js/generator-star-spacing',
      },
    },
    {
      args: {
        disableRule: 'implicit-arrow-linebreak',
        stylisticRule: '@stylistic/js/implicit-arrow-linebreak',
      },
    },
    {
      args: {
        disableRule: 'indent',
        stylisticRule: '@stylistic/js/indent',
      },
    },
    {
      args: {
        disableRule: 'jsx-quotes',
        stylisticRule: '@stylistic/js/jsx-quotes',
      },
    },
    {
      args: {
        disableRule: 'key-spacing',
        stylisticRule: '@stylistic/js/key-spacing',
      },
    },
    {
      args: {
        disableRule: 'keyword-spacing',
        stylisticRule: '@stylistic/js/keyword-spacing',
      },
    },
    {
      args: {
        disableRule: 'line-comment-position',
        stylisticRule: '@stylistic/js/line-comment-position',
      },
    },
    {
      args: {
        disableRule: 'linebreak-style',
        stylisticRule: '@stylistic/js/linebreak-style',
      },
    },
    {
      args: {
        disableRule: 'lines-around-comment',
        stylisticRule: '@stylistic/js/lines-around-comment',
      },
    },
    {
      args: {
        disableRule: 'lines-between-class-members',
        stylisticRule: '@stylistic/js/lines-between-class-members',
      },
    },
    {
      args: {
        disableRule: 'max-len',
        stylisticRule: '@stylistic/js/max-len',
      },
    },
    {
      args: {
        disableRule: 'max-statements-per-line',
        stylisticRule: '@stylistic/js/max-statements-per-line',
      },
    },
    {
      args: {
        disableRule: 'multiline-comment-style',
        stylisticRule: '@stylistic/js/multiline-comment-style',
      },
    },
    {
      args: {
        disableRule: 'multiline-ternary',
        stylisticRule: '@stylistic/js/multiline-ternary',
      },
    },
    {
      args: {
        disableRule: 'new-parens',
        stylisticRule: '@stylistic/js/new-parens',
      },
    },
    {
      args: {
        disableRule: 'newline-per-chained-call',
        stylisticRule: '@stylistic/js/newline-per-chained-call',
      },
    },
    {
      args: {
        disableRule: 'no-confusing-arrow',
        stylisticRule: '@stylistic/js/no-confusing-arrow',
      },
    },
    {
      args: {
        disableRule: 'no-extra-parens',
        stylisticRule: '@stylistic/js/no-extra-parens',
      },
    },
    {
      args: {
        disableRule: 'no-extra-semi',
        stylisticRule: '@stylistic/js/no-extra-semi',
      },
    },
    {
      args: {
        disableRule: 'no-floating-decimal',
        stylisticRule: '@stylistic/js/no-floating-decimal',
      },
    },
    {
      args: {
        disableRule: 'no-mixed-operators',
        stylisticRule: '@stylistic/js/no-mixed-operators',
      },
    },
    {
      args: {
        disableRule: 'no-mixed-spaces-and-tabs',
        stylisticRule: '@stylistic/js/no-mixed-spaces-and-tabs',
      },
    },
    {
      args: {
        disableRule: 'no-multi-spaces',
        stylisticRule: '@stylistic/js/no-multi-spaces',
      },
    },
    {
      args: {
        disableRule: 'no-multiple-empty-lines',
        stylisticRule: '@stylistic/js/no-multiple-empty-lines',
      },
    },
    {
      args: {
        disableRule: 'no-tabs',
        stylisticRule: '@stylistic/js/no-tabs',
      },
    },
    {
      args: {
        disableRule: 'no-trailing-spaces',
        stylisticRule: '@stylistic/js/no-trailing-spaces',
      },
    },
    {
      args: {
        disableRule: 'no-whitespace-before-property',
        stylisticRule: '@stylistic/js/no-whitespace-before-property',
      },
    },
    {
      args: {
        disableRule: 'nonblock-statement-body-position',
        stylisticRule: '@stylistic/js/nonblock-statement-body-position',
      },
    },
    {
      args: {
        disableRule: 'object-curly-newline',
        stylisticRule: '@stylistic/js/object-curly-newline',
      },
    },
    {
      args: {
        disableRule: 'object-curly-spacing',
        stylisticRule: '@stylistic/js/object-curly-spacing',
      },
    },
    {
      args: {
        disableRule: 'object-property-newline',
        stylisticRule: '@stylistic/js/object-property-newline',
      },
    },
    {
      args: {
        disableRule: 'one-var-declaration-per-line',
        stylisticRule: '@stylistic/js/one-var-declaration-per-line',
      },
    },
    {
      args: {
        disableRule: 'operator-linebreak',
        stylisticRule: '@stylistic/js/operator-linebreak',
      },
    },
    {
      args: {
        disableRule: 'padded-blocks',
        stylisticRule: '@stylistic/js/padded-blocks',
      },
    },
    {
      args: {
        disableRule: 'padding-line-between-statements',
        stylisticRule: '@stylistic/js/padding-line-between-statements',
      },
    },
    {
      args: {
        disableRule: 'quote-props',
        stylisticRule: '@stylistic/js/quote-props',
      },
    },
    {
      args: {
        disableRule: 'quotes',
        stylisticRule: '@stylistic/js/quotes',
      },
    },
    {
      args: {
        disableRule: 'rest-spread-spacing',
        stylisticRule: '@stylistic/js/rest-spread-spacing',
      },
    },
    {
      args: {
        disableRule: 'semi',
        stylisticRule: '@stylistic/js/semi',
      },
    },
    {
      args: {
        disableRule: 'semi-spacing',
        stylisticRule: '@stylistic/js/semi-spacing',
      },
    },
    {
      args: {
        disableRule: 'semi-style',
        stylisticRule: '@stylistic/js/semi-style',
      },
    },
    {
      args: {
        disableRule: 'space-before-blocks',
        stylisticRule: '@stylistic/js/space-before-blocks',
      },
    },
    {
      args: {
        disableRule: 'space-before-function-paren',
        stylisticRule: '@stylistic/js/space-before-function-paren',
      },
    },
    {
      args: {
        disableRule: 'space-in-parens',
        stylisticRule: '@stylistic/js/space-in-parens',
      },
    },
    {
      args: {
        disableRule: 'space-infix-ops',
        stylisticRule: '@stylistic/js/space-infix-ops',
      },
    },
    {
      args: {
        disableRule: 'space-unary-ops',
        stylisticRule: '@stylistic/js/space-unary-ops',
      },
    },
    {
      args: {
        disableRule: 'spaced-comment',
        stylisticRule: '@stylistic/js/spaced-comment',
      },
    },
    {
      args: {
        disableRule: 'switch-colon-spacing',
        stylisticRule: '@stylistic/js/switch-colon-spacing',
      },
    },
    {
      args: {
        disableRule: 'template-curly-spacing',
        stylisticRule: '@stylistic/js/template-curly-spacing',
      },
    },
    {
      args: {
        disableRule: 'template-tag-spacing',
        stylisticRule: '@stylistic/js/template-tag-spacing',
      },
    },
    {
      args: {
        disableRule: 'wrap-iife',
        stylisticRule: '@stylistic/js/wrap-iife',
      },
    },
    {
      args: {
        disableRule: 'wrap-regex',
        stylisticRule: '@stylistic/js/wrap-regex',
      },
    },
    {
      args: {
        disableRule: 'yield-star-spacing',
        stylisticRule: '@stylistic/js/yield-star-spacing',
      },
    },
  ]

  describe('should be same length', () => {
    test('of disable-core-stylistic', () => {
      const ruleNames = Object.keys(disableCoreStylistic.rules)

      expect(ruleNames)
        .toHaveLength(cases.length)
    })

    test('of stylistic/js', () => {
      const ruleNames = Object.keys(stylisticJs.rules)

      expect(ruleNames)
        .toHaveLength(cases.length)
    })
  })

  describe('should include all keys', () => {
    test.each(cases)('rule: $disableRule', ({ args }) => {
      expect(disableCoreStylistic.rules)
        .toHaveProperty(
          args.disableRule,
          'off'
        )

      expect(stylisticJs.rules)
        .toHaveProperty(
          args.stylisticRule,
          expect.any(Array)
        )
    })
  })
})
