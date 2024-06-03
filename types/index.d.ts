import {
  ESLint,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default' {
  const core: ESLint.ConfigData
  const disableCoreStylistic: ESLint.ConfigData
  const stylistic: ESLint.ConfigData
  const stylisticJs: ESLint.ConfigData
  const stylisticPlus: ESLint.ConfigData

  export = {
    core,
    disableCoreStylistic,
    stylistic,
    stylisticJs,
    stylisticPlus,
  }
}
