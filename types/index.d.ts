import {
  ESLint,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default' {
  const core: ESLint.ConfigData
  const stylistic: ESLint.ConfigData

  export = {
    core,
    stylistic,
  }
}
