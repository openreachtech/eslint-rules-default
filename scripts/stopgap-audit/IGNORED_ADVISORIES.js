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
  {
    id: 'GHSA-3g3m-2fjr-6pw4',
    package: 'glob',
    path: 'jest > @jest/core > @jest/reporters > glob | jest > @jest/core > jest-config > glob | jest > @jest/core > jest-runtime > glob',
    reason: 'Patched in glob 14.0.2, but the lockfile holds glob 10.5.0 and jest 30.5.2, the latest, still pins glob ^13.0.6 in @jest/reporters, jest-config and jest-runtime. No jest release admits a patched glob. The paths sit in the test runner only, which runs over this repository\'s own tests, so the package ships none of it.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-3g3m-2fjr-6pw4',
  },
  {
    id: 'GHSA-g3hv-75wg-m249',
    package: 'minimatch',
    path: 'eslint-plugin-jest > @typescript-eslint/utils > @typescript-eslint/typescript-estree > minimatch | jest > @jest/core > @jest/reporters > glob > minimatch',
    reason: 'Patched in minimatch 11.0.1, but the lockfile holds minimatch 9.0.9 for two paths: typescript-estree, whose latest 8.72.2 pins minimatch ^10.2.2, and the glob 10 of jest (see the entry above). Neither admits minimatch 11. Both paths sit in the lint and test toolchain, so the package ships none of it.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-g3hv-75wg-m249',
  },
]

export default IGNORED_ADVISORIES
