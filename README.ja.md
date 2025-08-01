# eslint-rules-default

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

此のパッケージは、ESLint の全ルールを明示されたディフォルトオプションと共に提供します。

他の ESLint 構成リポジトリの基本ルールセットとして使用すると、すべてのルールが機能します。無効にしたいルールは、各ルールを明示的にオフにする必要があります。

此のパッケージは、Flat Config 専用です。

## Usage

### Installing

`.npmrc` に以下を追加してください。

```
// .npmrc
@openreachtech:registry=https://npm.pkg.github.com
```

ESLint v9 以降と一緒に此のパッケージをインストールします。

```sh
npm install --save-dev \
  eslint \
  @openreachtech/eslint-rules-default
```

### Configuring

`eslint.config.js` ファイルに、`@openreachtech/eslint-rules-default` をインポートし、それを使用するためのすべてのルールを含めます。

```js
// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

import configurationHash from '@openreachtech/eslint-rules-default'

export default [
  {
    rules: {
      ...configurationHash.core.rules,
      ...stylistic.configs['disable-legacy'].rules, // TODO: Not required after v10.

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

此のパッケージには、stylistic plugin のルールセットも含まれています。

* [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)

#### Frequently-Disabled Rules

ESLint v9 のコア・ルールセットには、stylistic 関連のルールが含まれています。

ESLint v9 で `@stylistic/eslint-plugin` を使う場合は、以下の様にしてコア・ルールセット内の stylistic 関連のルールを無効化します。

```js
// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

import configurationHash from '@openreachtech/eslint-rules-default'

export default [
  // core rules
  {
    rules: {
      ...configurationHash.core.rules,
      ...stylistic.configs['disable-legacy'].rules, // <--- ✅

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

各 ESLint Config パッケージでディフォルトの値を上書きする時は、ディフォルトの値をラインコメントで残しておく方法がお薦めです。

```js
// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

import configurationHash from '@openreachtech/eslint-rules-default'

export default [
  {
    rules: {
      ...configurationHash.core.rules,
      ...stylistic.configs['disable-legacy'].rules,

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

このプロジェクトは MIT ライセンスに基づいてリリースされています。

此方をご覧ください → [LICENSE](./LICENSE)

## Contributing

バグレポート、機能リクエスト、ルールセットの貢献を歓迎します。

GitHub Issues または Pull Request を通じてお気軽にご提案ください。

私たちはユーザーの期待に応えるよう活動しており、貢献を高く評価します。

```sh
% git clone https://github.com/openreachtech/eslint-rules-default.git
% cd eslint-rules-default
% npm install
% npm run lint
% npm test
```

## Authors

* [Open Reach Tech株式会社](https://openreach.tech)
