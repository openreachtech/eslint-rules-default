# eslint-rules-default

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

This package provides ESLint rules with default options.

If this package is used as a base ruleset in another ESLint config repository, all rules
are enabled by default. You must explicitly turn off each rule that you want to disable.

This package is only for Flat Config.

## Usage

### Installing

Please add the following line to your `.npmrc` file.

```
// .npmrc
@openreachtech:registry=https://npm.pkg.github.com
```

Install this package alongside ESLint v9 or greater:

```sh
npm install --save-dev \
  eslint \
  @openreachtech/eslint-rules-default
```

### Configuring

In your `eslint.config.js` file, import `@openreachtech/eslint-rules-default` and include the all rules to use it:

```js
// eslint.config.js
import configurationHash from '@openreachtech/eslint-rules-default'

export default [
  {
    rules: {
      ...configurationHash.core.rules,
      ...configurationHash.disableCoreStylistic.rules, // Not required after v10.

      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: true, // false
        },
      ],

      'max-classes-per-file': [
        'error',
        {
          max: 1,
          ignoreExpressions: true, // false
        },
      ],

      ...
    },
  },
]
```

#### Advanced Configuration

This package also contains stylistic plugin ruleset.

* [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)

`@stylistic/eslint-plugin` rulesets included in this version are:

| ruleset | included |
|:--|:--:|
| eslint-plugin | ✅ |
| eslint-plugin-js | ✅ |
| eslint-plugin-ts | ❌ |
| eslint-plugin-jsx | ❌ |
| eslint-plugin-plus | ✅ |

`configurationHash.stylisticsTs` and `configurationHash.stylisticJsx` will be added in the future, if there are many needs.

#### Frequently-Disabled Rules

Core rules of ESLint v9 includes stylistic-related rules.

When using `@stylistic/eslint-plugin` with ESLint v9, please disable stylistic-related rules in the core ruleset as follows:


```js
// eslint.config.js
import configurationHash from '@openreachtech/eslint-rules-default'

export default [
  // core rules
  {
    rules: {
      ...configurationHash.core.rules,
      ...configurationHash.disableCoreStylistic.rules, // <--- ✅

      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: true, // false
        },
      ],

      ...
    },
  },

  // @stylistic rules
  {
    ...configurationHash.stylistic,

    rules: [
      ...configurationHash.stylistic.rules,

      '@stylistic/indent-binary-ops': [
        'error',
        4, // 2
      ],

      ...
    ],
  },
]
```

## Track of Changes with Line Comments

When overwriting default values ​​in each ESLint Config package, we recommend leaving the default values ​​as line comments.

```js
// eslint.config.js
import configurationHash from '@openreachtech/eslint-rules-default'

export default [
  {
    rules: {
      ...configurationHash.core.rules,
      ...configurationHash.disableCoreStylistic.rules,

      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: true, // false <--- ✅
        },
      ],

      'dot-notation': [
        'off', // 'error' <--- ✅
        {
          allowKeywords: true,
          allowPattern: '',
        },
      ],

      'max-classes-per-file': [
        'error',
        {
          max: 1,
          ignoreExpressions: true, // false <--- ✅
        },
      ],

      ...
    },
  },
]
```

## License

This project is released under the MIT License.

See → [LICENSE](./LICENSE)

## Contributing

We welcome bug reports, feature requests, and ruleset contributions.

Please feel free to contact us through GitHub Issues or Pull Requests.

We strive to meet user expectations and your contributions are highly appreciated!

```sh
% git clone https://github.com/openreachtech/eslint-rules-default.git
% cd eslint-rules-default
% npm install
% npm run lint
% npm test
```

## Authors

* [Open Reach Tech Inc.](https://openreach.tech)
