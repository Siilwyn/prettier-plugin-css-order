# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and follows [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.1.1] - 2024-03-26
### Fixed
- Revert addition of new option because it breaks usage without.

## [2.1.0] - 2024-03-25
### Added
- New `cssDeclarationSorterCustomOrder` option to sort properties using an array in a custom order, thanks to @SavaCool122! ✨

## [2.0.1] - 2023-10-01
### Fixed
- Use latest css-declaration-sorter version.

## [2.0.0] - 2023-07-29
### Changed
- Options are prefixed with `cssDeclarationSorter`, so `order` becomes `cssDeclarationSorterOrder` and `keepOverrides` becomes `cssDeclarationSorterKeepOverrides`.
- Uses Prettier 3 with faster async parsing and less dependencies! 🎉 Thanks to @ubermanu for the initial changes.
### Removed
- Node.js 14 support.

## [1.3.1] - 2023-06-08
### Fixed
- Sorting properties mixed with comments.

## [1.3.0] - 2022-07-25
### Added
- Support for Less syntax using the PostCSS Less parser.

## [1.2.0] - 2022-04-09
### Added
- New properties from [css-declaration-sorter@6.2.0](https://github.com/Siilwyn/css-declaration-sorter/blob/master/changelog.md#620---2022-03-26).

## [1.1.0] - 2022-01-08
### Added
- Support for new SCSS comment syntax using the PostCSS SCSS parser.

## [1.0.0] - 2021-07-27
Initial release.

[2.1.1]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v1.3.1...v2.0.0
[1.3.1]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Siilwyn/prettier-plugin-css-order/compare/20d0272...v1.0.0
