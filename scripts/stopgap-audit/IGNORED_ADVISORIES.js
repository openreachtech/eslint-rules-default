/**
 * Advisories `npm run audit:npm` lets through until the lockfile no longer reports them.
 *
 * @type {Array<{
 *   id: string
 *   package: string
 *   path: string
 *   reason: string
 *   removeWhen: string
 * }>}
 */
const IGNORED_ADVISORIES = [
  {
    id: 'GHSA-gcqx-w48m-w2h4',
    package: 'deepmerge',
    path: 'jest > @jest/core > jest-config > deepmerge',
    reason: 'No patched release: the advisory covers deepmerge >=4.2.0 <=4.3.1, and 4.3.1 is the latest. The flaw is prototype poisoning through mergeObject() when a source object carries malicious keys. deepmerge is reached by jest-config alone, a test runner that merges this repository\'s own configuration on a developer machine or in CI, so it is not published in this package and nothing it merges comes from outside.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-gcqx-w48m-w2h4',
  },
]

export default IGNORED_ADVISORIES
