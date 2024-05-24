import jsdocPlugin from 'eslint-plugin-jsdoc'

export default {
  plugins: {
    jsdoc: jsdocPlugin,
  },
  rules: {
    'jsdoc/check-access': [
      'error',
    ],
    'jsdoc/check-alignment': [
      'error',
    ],
    'jsdoc/check-indentation': [
      'error',
      {
        excludeTags: [
          'example',
          'param',
          'returns',
          'type',
          'typedef',
          'yields',
        ],
      },
    ],
    'jsdoc/check-line-alignment': [
      'error',
      'never',
      {
        tags: [
          'param',
          'arg',
          'argument',
          'property',
          'prop',
          'returns',
          'return',
        ],
        customSpacings: [
          {
            postDelimiter: 1,
          },
          {
            postTag: 1,
          },
          {
            postType: 1,
          },
          {
            postName: 1,
          },
          {
            postHyphen: 1,
          },
        ],
        preserveMainDescriptionPostDelimiter: false,
        wrapIndent: '',
      },
    ],
    'jsdoc/check-param-names': [
      'error',
      {
        allowExtraTrailingParamDocs: false,
        checkDestructured: true,
        checkRestProperty: false,
        checkTypesPattern: '/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/',
        enableFixer: false,
        disableExtraPropertyReporting: false,
        useDefaultObjectProperties: false,
      },
    ],
    'jsdoc/check-property-names': [
      'error',
      {
        enableFixer: false,
      },
    ],
    'jsdoc/check-syntax': [
      'error',
    ],
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: [],
        enableFixer: true,
        jsxTags: false,
        typed: false,
      },
    ],
    'jsdoc/check-types': [
      'error',
      {
        noDefaults: false,
        unifyParentAndChildTypeChecks: false,
        exemptTagContexts: [],
      },
    ],
    'jsdoc/check-values': [
      'error',
      {
        allowedAuthors: [],
        allowedLicenses: [],
        numericOnlyVariation: false,
        licensePattern: '/([^\\\\n\\\\r]*)/gu',
      },
    ],
    'jsdoc/empty-tags': [
      'error',
      {
        tags: [],
      },
    ],
    'jsdoc/implements-on-classes': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/imports-as-dependencies': [
      'error',
    ],
    'jsdoc/informative-docs': [
      'error',
      {
        aliases: [
          'an',
          'our',
        ],
        uselessWords: [
          'a',
          'an',
          'i',
          'in',
          'of',
          's',
          'the',
        ],
      },
    ],
    'jsdoc/match-description': [
      'error',
      {
        mainDescription: true,
        matchDescription: '^\\n?([A-Z`\\d_][\\s\\S]*[.?!`]\\s*)?$',
        message: 'JSDoc description does not satisfy the regex pattern.',
        nonemptyTags: true,
        tags: {},
      },
    ],
    'jsdoc/match-name': [
      'error',
      {
        match: [],
      },
    ],
    'jsdoc/multiline-blocks': [
      'error',
      {
        allowMultipleTags: true,
        minimumLengthForMultiline: Infinity,
        multilineTags: [
          '*',
        ],
        noFinalLineText: true,
        noMultilineBlocks: false,
        noSingleLineBlocks: true,
        noZeroLineText: true,
        singleLineTags: [
          'lends',
          'type',
          'inheritdoc',
          'override',
        ],
      },
    ],
    'jsdoc/no-bad-blocks': [
      'error',
      {
        ignore: [
          'ts-check',
          'ts-expect-error',
          'ts-ignore',
          'ts-nocheck',
        ],
        preventAllMultiAsteriskBlocks: false,
      },
    ],
    'jsdoc/no-blank-block-descriptions': [
      'error',
    ],
    'jsdoc/no-blank-blocks': [
      'error',
      {
        enableFixer: false,
      },
    ],
    'jsdoc/no-defaults': [
      'error',
      {
        noOptionalParamNames: false,
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/no-missing-syntax': [
      'error',
      {
        contexts: [],
      },
    ],
    'jsdoc/no-multi-asterisks': [
      'error',
      {
        allowWhitespace: false,
        preventAtEnd: true,
        preventAtMiddleLines: true,
      },
    ],
    'jsdoc/no-restricted-syntax': [
      'error',
      {
        contexts: [],
      },
    ],
    'jsdoc/no-types': [
      'error',
      {
        contexts: [],
      },
    ],
    'jsdoc/no-undefined-types': [
      'error',
      {
        definedTypes: [],
        disableReporting: false,
        markVariablesAsUsed: true,
      },
    ],
    'jsdoc/require-asterisk-prefix': [
      'error',
      'always',
      {
        tags: {},
      },
    ],
    'jsdoc/require-description': [
      'error',
      {
        checkConstructors: true,
        checkGetters: true,
        checkSetters: true,
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
        descriptionStyle: 'body',
        exemptedBy: [
          'inheritdoc',
        ],
      },
    ],
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        abbreviations: [],
        newlineBeforeCapsAssumesBadSentenceEnd: false,
        tags: [],
      },
    ],
    'jsdoc/require-example': [
      'error',
      {
        checkConstructors: true,
        checkGetters: false,
        checkSetters: false,
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
        enableFixer: true,
        exemptedBy: [
          'inheritdoc',
        ],
        exemptNoArguments: false,
      },
    ],
    'jsdoc/require-file-overview': [
      'error',
      {
        tags: {
          file: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: true,
          },
        },
      },
    ],
    'jsdoc/require-hyphen-before-param-description': [
      'error',
      'always',
      {
        tags: {},
      },
    ],
    'jsdoc/require-jsdoc': [
      'error',
      {
        checkConstructors: true,
        checkGetters: true,
        checkSetters: true,
        contexts: [
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'FunctionDeclaration',
          'FunctionExpression',
          'MethodDefinition',
        ],
        enableFixer: true,
        exemptEmptyConstructors: true,
        exemptEmptyFunctions: false,
        fixerMessage: '',
        minLineCount: 'undefined',
        publicOnly: false,
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          ClassExpression: false,
          FunctionDeclaration: true,
          FunctionExpression: false,
          MethodDefinition: false,
        },
      },
    ],
    'jsdoc/require-param': [
      'error',
      {
        autoIncrementBase: 0,
        checkRestProperty: false,
        checkDestructured: true,
        checkDestructuredRoots: true,
        checkTypesPattern: '/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/',
        enableFixer: true,
        enableRootFixer: true,
        enableRestElementFixer: true,
        unnamedRootBase: [
          'root',
        ],
        useDefaultObjectProperties: false,
      },
    ],
    'jsdoc/require-param-description': [
      'error',
      {
        defaultDestructuredRootDescription: 'The root object',
        setDefaultDestructuredRootDescription: false,
      },
    ],
    'jsdoc/require-param-name': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/require-param-type': [
      'error',
      {
        defaultDestructuredRootType: 'object',
        setDefaultDestructuredRootType: false,
      },
    ],
    'jsdoc/require-property': [
      'error',
    ],
    'jsdoc/require-property-description': [
      'error',
    ],
    'jsdoc/require-property-name': [
      'error',
    ],
    'jsdoc/require-property-type': [
      'error',
    ],
    'jsdoc/require-returns': [
      'error',
      {
        checkConstructors: false,
        checkGetters: true,
        exemptedBy: [
          'inheritdoc',
        ],
        forceRequireReturn: false,
        forceReturnsWithAsync: false,
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/require-returns-check': [
      'error',
      {
        exemptAsync: true,
        exemptGenerators: false,
        reportMissingReturnForUndefinedTypes: false,
      },
    ],
    'jsdoc/require-returns-description': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/require-returns-type': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/require-throws': [
      'error',
      {
        exemptedBy: [
          'inheritdoc',
        ],
        contexts: [
          'ArrowFunctionExpression',
          'FunctionDeclaration',
          'FunctionExpression',
        ],
      },
    ],
    'jsdoc/require-yields': [
      'error',
      {
        exemptedBy: [
          'inheritdoc',
        ],
        forceRequireYields: false,
        contexts: [
          'FunctionDeclaration',
          'FunctionExpression',
        ],
        withGeneratorTag: true,
        next: false,
        forceRequireNext: false,
        nextWithGeneratorTag: false,
      },
    ],
    'jsdoc/require-yields-check': [
      'error',
      {
        checkGeneratorsOnly: false,
        next: false,
      },
    ],
    'jsdoc/tag-lines': [
      'error',
      'never',
      {
        count: 1,
        startLines: 0,
        endLines: 0,
        applyToEndTag: true,
        tags: {},
      },
    ],
    'jsdoc/valid-types': [
      'error',
      {
        allowEmptyNamepaths: true,
      },
    ],
  },
}
