import {
  ESLint,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default' {
  const core: ESLint.ConfigData<ESLint.LintOptions>
  const disableCoreStylistic: ESLint.ConfigData<ESLint.LintOptions>
  const stylisticJs: ESLint.ConfigData<ESLint.LintOptions>
  const stylisticPlus: ESLint.ConfigData<ESLint.LintOptions>

  export = {
    core,
    disableCoreStylistic,
    stylisticJs,
    stylisticPlus,
  }
}
