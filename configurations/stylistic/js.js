import stylistic from '@stylistic/eslint-plugin'

export default {
  plugins: {
    '@stylistic/js': stylistic,
  },
  rules: {
    '@stylistic/js/array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: null,
      },
    ],
    '@stylistic/js/array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: false,
        objectsInArrays: false,
        singleValue: false,
      },
    ],
    '@stylistic/js/array-element-newline': [
      'error',
      'always',
      {
        multiline: false,
        minItems: null,
      },
    ],
    '@stylistic/js/arrow-parens': [
      'error',
      'always',
      {
        requireForBlockBody: false,
      },
    ],
    '@stylistic/js/arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/js/block-spacing': [
      'error',
      'always',
    ],
    '@stylistic/js/brace-style': [
      'error',
      '1tbs', // = One True Brace Style
      {
        allowSingleLine: false,
      },
    ],
    '@stylistic/js/comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    '@stylistic/js/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/js/comma-style': [
      'error',
      'last',
    ],
    '@stylistic/js/computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    '@stylistic/js/dot-location': [
      'error',
      'object',
    ],
    '@stylistic/js/eol-last': [
      'error',
      'always',
    ],
    '@stylistic/js/function-call-argument-newline': [
      'error',
      'always',
    ],
    '@stylistic/js/function-call-spacing': [
      'error',
      'never',
    ],
    '@stylistic/js/function-paren-newline': [
      'error',
      'multiline',
    ],
    '@stylistic/js/generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],
    '@stylistic/js/implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    '@stylistic/js/indent': [
      'error',
      4,
      {
        ignoredNodes: [],
        SwitchCase: 0,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
      },
    ],
    '@stylistic/js/jsx-quotes': [
      'error',
      'prefer-double',
    ],
    '@stylistic/js/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    '@stylistic/js/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/js/line-comment-position': [
      'error',
      {
        position: 'above',
        applyDefaultIgnorePatterns: true,
        ignorePattern: '',
      },
    ],
    '@stylistic/js/linebreak-style': [
      'error',
      'unix',
    ],
    '@stylistic/js/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowArrayStart: false,
        allowArrayEnd: false,
        allowBlockStart: false,
        allowBlockEnd: false,
        allowClassStart: false,
        allowClassEnd: false,
        allowObjectStart: false,
        allowObjectEnd: false,
        ignorePattern: '',
        applyDefaultIgnorePatterns: true,
        afterHashbangComment: false,
      },
    ],
    '@stylistic/js/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    '@stylistic/js/max-len': [
      'error',
      {
        code: 80,
        tabWidth: 4,
      },
    ],
    '@stylistic/js/max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    '@stylistic/js/multiline-comment-style': [
      'error',
      'starred-block',
    ],
    '@stylistic/js/multiline-ternary': [
      'error',
      'always',
    ],
    '@stylistic/js/new-parens': [
      'error',
      'always',
    ],
    '@stylistic/js/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    '@stylistic/js/no-confusing-arrow': [
      'error',
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],
    '@stylistic/js/no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'none',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
        allowParensAfterCommentPattern: '',
      },
    ],
    '@stylistic/js/no-extra-semi': [
      'error',
    ],
    '@stylistic/js/no-floating-decimal': [
      'error',
    ],
    '@stylistic/js/no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [
          [
            '+',
            '-',
            '*',
            '/',
            '%',
            '**',
          ],
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          [
            '&&',
            '||',
          ],
          [
            'in',
            'instanceof',
          ],
        ],
      },
    ],
    '@stylistic/js/no-mixed-spaces-and-tabs': [
      'error',
    ],
    '@stylistic/js/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
        exceptions: {
          Property: true,
        },
      },
    ],
    '@stylistic/js/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 2,
        maxEOF: 2,
      },
    ],
    '@stylistic/js/no-tabs': [
      'error',
      {
        allowIndentationTabs: false,
      },
    ],
    '@stylistic/js/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    '@stylistic/js/no-whitespace-before-property': [
      'error',
    ],
    '@stylistic/js/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],
    '@stylistic/js/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
        ObjectPattern: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
      },
    ],
    '@stylistic/js/object-curly-spacing': [
      'error',
      'never',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    '@stylistic/js/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    '@stylistic/js/one-var-declaration-per-line': [
      'error',
      'initializations',
    ],
    '@stylistic/js/operator-linebreak': [
      'error',
      'after',
      {
        overrides: {},
      },
    ],
    '@stylistic/js/padded-blocks': [
      'error',
      'always',
      {
        allowSingleLineBlocks: false,
      },
    ],
    '@stylistic/js/padding-line-between-statements': [
      'error',
      // There are 0 or more rest parameters in the array
      // { blankLine: string, prev: string, next: string }
    ],
    '@stylistic/js/quote-props': [
      'error',
      'always',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    '@stylistic/js/quotes': [
      'error',
      'double',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    '@stylistic/js/rest-spread-spacing': [
      'error',
      'never',
    ],
    '@stylistic/js/semi': [
      'error',
      'always',
      // When 2nd item of options is 'always', used below object as 3rd item.
      {
        omitLastInOneLineBlock: true,
        omitLastInOneLineClassBody: true,
      },
      // When 2nd item of options is 'never', used below object as 3rd item.
      // {
      //   beforeStatementContinuationChars: 'any',
      // },
    ],
    '@stylistic/js/semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/js/semi-style': [
      'error',
      'last',
    ],
    '@stylistic/js/space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],
    '@stylistic/js/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/js/space-in-parens': [
      'error',
      'never',
    ],
    '@stylistic/js/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    '@stylistic/js/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    '@stylistic/js/spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: [
            '/',
            '-',
            '=',
            '+',
          ],
          markers: [
            '*',
          ],
        },
        block: {
          exceptions: [
            '*',
          ],
          markers: [
            '*',
          ],
          balanced: true,
        },
        markers: [
          '*',
        ],
        exceptions: [],
      },
    ],
    '@stylistic/js/switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/js/template-curly-spacing': [
      'error',
      'never',
    ],
    '@stylistic/js/template-tag-spacing': [
      'error',
      'never',
    ],
    '@stylistic/js/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    '@stylistic/js/wrap-regex': [
      'error',
    ],
    '@stylistic/js/yield-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
  },
}
