# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.0.2](https://github.com/WalltoWall/helpers/compare/v7.0.1...v7.0.2) (2021-10-02)


### Bug Fixes

* url search param body ([0f345dd](https://github.com/WalltoWall/helpers/commit/0f345ddcf1933badae839c345074ae9b23a31b7a))

### [7.0.1](https://github.com/WalltoWall/helpers/compare/v7.0.0...v7.0.1) (2021-10-02)


### Bug Fixes

* add url form encoded header ([8ace42d](https://github.com/WalltoWall/helpers/commit/8ace42d66562037e8d7757596cbe47ae8317d737))

## [7.0.0](https://github.com/WalltoWall/helpers/compare/v6.3.0...v7.0.0) (2021-08-27)

### ⚠ BREAKING CHANGES

- Removed zip utilities. Too confusing for client use.
- Removes all Gatsby specific utilities. Framework specific utilities should
  defer to a /framework endpoint.
- `getNormalizedSlug` and `getNormalizedUID` now use framework agnostic Prismic
  types
- `isBrowser` is a function that must be called
- Removes tag related utilities. Too confusing and unreliable for client use

### Bug Fixes

- remove getRichText
  ([51277f9](https://github.com/WalltoWall/helpers/commit/51277f99fd4c5ebe62125ffda6713dc1c6b54dc3))

- getNormalizedSlug and UID now use agnostic prismic types
  ([f6d4f6e](https://github.com/WalltoWall/helpers/commit/f6d4f6e11cae5ff4c6f8943866345ecba04e053d))
- new ava tests to pass
  ([9104cf2](https://github.com/WalltoWall/helpers/commit/9104cf20a5e46ee92404b6c73b25773da528ccb7))
- remove first left
  ([916c5aa](https://github.com/WalltoWall/helpers/commit/916c5aa25dfbda804075d168a70c056cb588ab40))
- remove getImageFluid
  ([04cd9ac](https://github.com/WalltoWall/helpers/commit/04cd9ace972ce063579f64f2669bf3a8c132d3d7))
- remove getRichText util
  ([744bffe](https://github.com/WalltoWall/helpers/commit/744bffee7004cae39e7cac2fdbd3ca8f47f49139))
- remove prismic gatsby specific utils
  ([d6aa7aa](https://github.com/WalltoWall/helpers/commit/d6aa7aab476a6a7fdab252052c17a5476e51f7a9))
- remove tag related helpers
  ([9dfc5c2](https://github.com/WalltoWall/helpers/commit/9dfc5c28cd6a98f9cfb1940f3ece31101b8c058d))
- remove zip utility functions
  ([0b66422](https://github.com/WalltoWall/helpers/commit/0b664227eaa6c6a69e73b88331b713497f0f4578))

## [6.3.0](https://github.com/WalltoWall/helpers/compare/v6.2.0...v6.3.0) (2020-12-04)

### Features

- extractAnchor and isAnchorOnly
  ([e4c88ea](https://github.com/WalltoWall/helpers/commit/e4c88eabdb0f83ebeef0c20ea21c974dfd55d360))

## [6.2.0](https://github.com/WalltoWall/helpers/compare/v6.1.0...v6.2.0) (2020-07-11)

### Features

- add valuesDeep
  ([c860efc](https://github.com/WalltoWall/helpers/commit/c860efcec297633c41d0ed36a6e9a806aa0387ed))

## [6.1.0](https://github.com/WalltoWall/helpers/compare/v6.0.1...v6.1.0) (2020-06-15)

### Features

- undefIfEmpty now accepts a generic
  ([e7656f6](https://github.com/WalltoWall/helpers/commit/e7656f69db948026929f08bd5bc382dc6e3e731c))

### Bug Fixes

- generic object type
  ([d5d1f5d](https://github.com/WalltoWall/helpers/commit/d5d1f5dc8ff99a4620d9147e9c7854d05b25d3c0))

### [6.0.1](https://github.com/WalltoWall/helpers/compare/v6.0.0...v6.0.1) (2020-05-22)

### Bug Fixes

- `getRichText` accepts `undefined`
  ([e88432f](https://github.com/WalltoWall/helpers/commit/e88432f517c535dda6f501c3d4d595e9d47e8385))

## [6.0.0](https://github.com/WalltoWall/helpers/compare/v5.0.3...v6.0.0) (2020-05-16)

### ⚠ BREAKING CHANGES

- All `metadata` related helpers have been removed. `notEmpty` has been renamed
  to `undefIfEmpty`. `getSearchQuery` has been removed. `mapObj` has been
  removed. See #4 for additional information, workarounds and alternatives.

### Features

- refactor to TypeScript and reorganize files and tests
  ([063f3ba](https://github.com/WalltoWall/helpers/commit/063f3baa8a817fafd21a0a4d4cacb2fe80d695ff))

### [5.0.3](https://github.com/WalltoWall/helpers/compare/v5.0.2...v5.0.3) (2020-04-26)

### Bug Fixes

- support undefined inputs for `getRichText`
  ([826b477](https://github.com/WalltoWall/helpers/commit/826b477))

### [5.0.2](https://github.com/WalltoWall/helpers/compare/v5.0.1...v5.0.2) (2019-12-09)

### Bug Fixes

- avoid infinite loops on pathFor functions
  ([4af9207](https://github.com/WalltoWall/helpers/commit/4af9207))

### [5.0.1](https://github.com/WalltoWall/helpers/compare/v5.0.0...v5.0.1) (2019-12-09)

### Bug Fixes

- correctly process GraphQL link nodes
  ([6aaa96b](https://github.com/WalltoWall/helpers/commit/6aaa96b))

## [5.0.0](https://github.com/WalltoWall/helpers/compare/v4.4.4...v5.0.0) (2019-12-08)

### ⚠ BREAKING CHANGES

- This affects all link resolver `pathFor` functions. If your code relied on
  preferring UID over slugs, this **will** break your code.

We may need to provide an alternative function or flag to determine which takes
precedence.

### Features

- prefer slug over UID in `normalizeSlug`
  ([65c81bb](https://github.com/WalltoWall/helpers/commit/65c81bb))

### [4.4.4](https://github.com/WalltoWall/helpers/compare/v4.4.3...v4.4.4) (2019-12-08)

### Bug Fixes

- handle links with new shape for all link resolver functions
  ([2a5efac](https://github.com/WalltoWall/helpers/commit/2a5efac))

### [4.4.3](https://github.com/WalltoWall/helpers/compare/v4.4.2...v4.4.3) (2019-10-25)

### Bug Fixes

- don't throw on undefined values on propPairsEq
  ([96032b6](https://github.com/WalltoWall/helpers/commit/96032b6))

### [4.4.2](https://github.com/WalltoWall/helpers/compare/v4.4.1...v4.4.2) (2019-08-21)

### [4.4.1](https://github.com/WalltoWall/helpers/compare/v4.4.0...v4.4.1) (2019-08-21)

### Bug Fixes

- check first element for File existence
  ([f6911b9](https://github.com/WalltoWall/helpers/commit/f6911b9))

## [4.4.0](https://github.com/WalltoWall/helpers/compare/v4.3.4...v4.4.0) (2019-08-21)

### Features

- normalizeFormData now preserves File types
  ([81a318a](https://github.com/WalltoWall/helpers/commit/81a318a))

### [4.3.4](https://github.com/WalltoWall/helpers/compare/v4.3.3...v4.3.4) (2019-08-15)

### Bug Fixes

- compact obj actually removes undefined
  ([0b1dba5](https://github.com/WalltoWall/helpers/commit/0b1dba5))

### [4.3.3](https://github.com/WalltoWall/helpers/compare/v4.3.2...v4.3.3) (2019-08-15)

### Bug Fixes

- only stringify keys
  ([fd4aca7](https://github.com/WalltoWall/helpers/commit/fd4aca7))

### [4.3.2](https://github.com/WalltoWall/helpers/compare/v4.3.1...v4.3.2) (2019-08-15)

### Bug Fixes

- stringify compacted objects
  ([2d291db](https://github.com/WalltoWall/helpers/commit/2d291db))

### [4.3.1](https://github.com/WalltoWall/helpers/compare/v4.3.0...v4.3.1) (2019-08-15)

### Bug Fixes

- readd value spreading
  ([fb727c1](https://github.com/WalltoWall/helpers/commit/fb727c1))

## [4.3.0](https://github.com/WalltoWall/helpers/compare/v4.2.0...v4.3.0) (2019-08-15)

### Bug Fixes

- return empty key value pair in compact obj
  ([fb2842f](https://github.com/WalltoWall/helpers/commit/fb2842f))

### Features

- compact now removes empty strings too
  ([1bf0c3d](https://github.com/WalltoWall/helpers/commit/1bf0c3d))
- formdata normalizer logic moved to dedicated normalizer function
  ([96d50de](https://github.com/WalltoWall/helpers/commit/96d50de))

## [4.2.0](https://github.com/WalltoWall/helpers/compare/v4.1.0...v4.2.0) (2019-08-15)

### Features

- postNetlifyForm now supports objects
  ([0e55f97](https://github.com/WalltoWall/helpers/commit/0e55f97))

## [4.1.0](https://github.com/WalltoWall/helpers/compare/v4.0.0...v4.1.0) (2019-08-15)

### Features

- postNetlifyForm now stringifies array values
  ([44dd82f](https://github.com/WalltoWall/helpers/commit/44dd82f))

## [4.0.0](https://github.com/WalltoWall/helpers/compare/v3.2.1...v4.0.0) (2019-08-14)

### ⚠ BREAKING CHANGES

- `nodes` has been removed. Use gatsbys provided `nodes` field instead.

### Features

- typescript defs and new helpers
  ([2cbcf21](https://github.com/WalltoWall/helpers/commit/2cbcf21))
- update docs and un curry arguments in examples
  ([79d071c](https://github.com/WalltoWall/helpers/commit/79d071c))

### [3.2.1](https://github.com/WalltoWall/helpers/compare/v3.2.0...v3.2.1) (2019-08-01)

### Bug Fixes

- prefer UID over slug
  ([5a95bd9](https://github.com/WalltoWall/helpers/commit/5a95bd9))

## [3.2.0](https://github.com/WalltoWall/helpers/compare/v3.1.1...v3.2.0) (2019-08-01)

### Features

- support normalizing nodes with multiple slugs
  ([bd1d7dd](https://github.com/WalltoWall/helpers/commit/bd1d7dd))

### [3.1.1](https://github.com/WalltoWall/helpers/compare/v3.1.0...v3.1.1) (2019-08-01)

### Bug Fixes

- use correct link resolver path
  ([013a8be](https://github.com/WalltoWall/helpers/commit/013a8be))

## [3.1.0](https://github.com/WalltoWall/helpers/compare/v3.0.1...v3.1.0) (2019-07-27)

### Features

- export flatten
  ([3c10e8c](https://github.com/WalltoWall/helpers/commit/3c10e8c))

### [3.0.1](https://github.com/WalltoWall/helpers/compare/v3.0.0...v3.0.1) (2019-07-25)

### Bug Fixes

- reduce browser support
  ([2957760](https://github.com/WalltoWall/helpers/commit/2957760))

## [3.0.0](https://github.com/WalltoWall/helpers/compare/v3.0.0-alpha.2...v3.0.0) (2019-07-25)

### Bug Fixes

- add sideEffects false to package
  ([b15dc09](https://github.com/WalltoWall/helpers/commit/b15dc09))
- check for null
  ([be011ae](https://github.com/WalltoWall/helpers/commit/be011ae))
- replace Array.prototype.flat() with \_flatten
  ([53cadb1](https://github.com/WalltoWall/helpers/commit/53cadb1))

### Tests

- add es6 env ([ca5d7e4](https://github.com/WalltoWall/helpers/commit/ca5d7e4))

## [3.0.0-alpha.2](https://github.com/WalltoWall/helpers/compare/v3.0.0-alpha.1...v3.0.0-alpha.2) (2019-07-20)

### Bug Fixes

- use correct camelcase package
  ([2b3fce4](https://github.com/WalltoWall/helpers/commit/2b3fce4))

## [3.0.0-alpha.1](https://github.com/WalltoWall/helpers/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2019-07-20)

### Bug Fixes

- use correct packages
  ([b98f82b](https://github.com/WalltoWall/helpers/commit/b98f82b))

## 3.0.0-alpha.0 (2019-07-20)

### Features

- embrace >=ES6, remove lodash
  ([7be71dd](https://github.com/WalltoWall/helpers/commit/7be71dd))
- migrate package to its own repo
  ([6a9cf9a](https://github.com/WalltoWall/helpers/commit/6a9cf9a))

### BREAKING CHANGES

- `getUnlessEmpty` is replaced with `notEmpty`
- `getRichText` no longer receives a path. Provide it the object directly.
- `getSearchQuery` no longer requires "?" for first param.
- All helpers are no longer curried. Wrap the functions with `curry` if needed.

## [2.15.2](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.15.1...@walltowall/helpers@2.15.2) (2019-06-28)

### Bug Fixes

- add forgotten babel plugin
  ([cadc6a6](https://github.com/WalltoWall/gatsby-ww/commit/cadc6a6))

## [2.15.1](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.15.0...@walltowall/helpers@2.15.1) (2019-06-28)

### Bug Fixes

- add runtime helpers
  ([23900e5](https://github.com/WalltoWall/gatsby-ww/commit/23900e5))

# [2.15.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.14.0...@walltowall/helpers@2.15.0) (2019-06-28)

### Features

- all packages use rollup and lodash plugin
  ([391f7d5](https://github.com/WalltoWall/gatsby-ww/commit/391f7d5))

# [2.14.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.13.0...@walltowall/helpers@2.14.0) (2019-06-28)

### Features

- remove lorem-ipsum
  ([7ac8dba](https://github.com/WalltoWall/gatsby-ww/commit/7ac8dba))

# [2.13.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.12.0...@walltowall/helpers@2.13.0) (2019-06-28)

### Features

- update npmignore and useScrollDirection hook
  ([36b27d2](https://github.com/WalltoWall/gatsby-ww/commit/36b27d2))

# [2.12.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.11.0...@walltowall/helpers@2.12.0) (2019-06-28)

### Features

- helpers build step
  ([9f6dbd6](https://github.com/WalltoWall/gatsby-ww/commit/9f6dbd6))

# [2.11.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.10.0...@walltowall/helpers@2.11.0) (2019-05-21)

### Features

- add recaptchaResponse to postNetlifyForm
  ([#43](https://github.com/WalltoWall/gatsby-ww/issues/43))
  ([b9b3258](https://github.com/WalltoWall/gatsby-ww/commit/b9b3258))

# [2.10.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.9.0...@walltowall/helpers@2.10.0) (2019-05-17)

### Features

- arrayPathFor document is no longer an array
  ([dbde4c9](https://github.com/WalltoWall/gatsby-ww/commit/dbde4c9))

# [2.9.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.8.1...@walltowall/helpers@2.9.0) (2019-05-15)

### Features

- zipBetweenSlices and tests
  ([c3caaee](https://github.com/WalltoWall/gatsby-ww/commit/c3caaee))

## [2.8.1](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.8.0...@walltowall/helpers@2.8.1) (2019-04-04)

**Note:** Version bump only for package @walltowall/helpers

# [2.8.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.7.1...@walltowall/helpers@2.8.0) (2019-04-04)

### Bug Fixes

- resolve cyclic dependencies
  ([9cfaa40](https://github.com/WalltoWall/gatsby-ww/commit/9cfaa40))

### Features

- add start of gatsby-theme-ww-reference
  ([3a16c65](https://github.com/WalltoWall/gatsby-ww/commit/3a16c65))
- fix prettier configs and deps
  ([0bec09b](https://github.com/WalltoWall/gatsby-ww/commit/0bec09b))
- merge master
  ([d771e64](https://github.com/WalltoWall/gatsby-ww/commit/d771e64))
- update deps
  ([2032af5](https://github.com/WalltoWall/gatsby-ww/commit/2032af5))

## [2.7.1](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.7.0...@walltowall/helpers@2.7.1) (2019-03-20)

### Bug Fixes

- handle invalid string cases metadatabasename
  ([2fdb10d](https://github.com/WalltoWall/gatsby-ww/commit/2fdb10d))

# [2.7.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.6.0...@walltowall/helpers@2.7.0) (2019-03-20)

### Features

- revert back to \_\_typenam, add metadataBasename
  ([e28f141](https://github.com/WalltoWall/gatsby-ww/commit/e28f141))

# [2.6.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.5.0...@walltowall/helpers@2.6.0) (2019-03-20)

### Features

- add getPrimaryMetadata type helper and fix metadata helpers
  ([de401b1](https://github.com/WalltoWall/gatsby-ww/commit/de401b1))

# [2.5.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.4.0...@walltowall/helpers@2.5.0) (2019-03-04)

### Bug Fixes

- remove log statements and update mapObj documentation
  ([cad03fd](https://github.com/WalltoWall/gatsby-ww/commit/cad03fd))

### Features

- mapOverrides support for pages
  ([9ba2236](https://github.com/WalltoWall/gatsby-ww/commit/9ba2236))

# [2.4.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.3.0...@walltowall/helpers@2.4.0) (2019-02-21)

### Features

- add isPathActiveExact helper
  ([55fd329](https://github.com/WalltoWall/gatsby-ww/commit/55fd329))

# [2.3.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.2.0...@walltowall/helpers@2.3.0) (2019-02-14)

### Features

- add metadata and tag helpers
  ([2b57d79](https://github.com/WalltoWall/gatsby-ww/commit/2b57d79))

# [2.2.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.1.0...@walltowall/helpers@2.2.0) (2019-02-13)

### Features

- utilize Prismic doc rather than Gatsby node for linkResolver funcs
  ([f1b6c62](https://github.com/WalltoWall/gatsby-ww/commit/f1b6c62))

# [2.1.0](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.0.1...@walltowall/helpers@2.1.0) (2019-02-13)

### Features

- add link resolver version of arrayPathFor and pathFor
  ([cddee6c](https://github.com/WalltoWall/gatsby-ww/commit/cddee6c))

## [2.0.1](https://github.com/WalltoWall/gatsby-ww/compare/@walltowall/helpers@2.0.0...@walltowall/helpers@2.0.1) (2019-01-25)

**Note:** Version bump only for package @walltowall/helpers

# 2.0.0 (2019-01-25)

### Bug Fixes

- remove [@babel](https://github.com/babel)/preset-react from helpers
  ([5a66547](https://github.com/WalltoWall/gatsby-ww/commit/5a66547))

### Features

- move system/helpers into its own package
  ([8297a99](https://github.com/WalltoWall/gatsby-ww/commit/8297a99))

### BREAKING CHANGES

- `@walltowall/system/helpers` must now be imported from `@walltowall/helpers`
