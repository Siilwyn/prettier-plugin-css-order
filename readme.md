# CSS Order Prettier Plugin
[![npm][npm-badge]][npm]

A [Prettier](https://prettier.io/) plugin to sort CSS, SCSS or Less declarations based on their property names.  
Using [css-declaration-sorter](https://github.com/Siilwyn/css-declaration-sorter/) under the hood.

## Usage
Following the Prettier plugin guidelines, this package depends on Prettier as a peer dependency:  
`npm install postcss prettier-plugin-css-order --save-dev`

After installation Prettier should automatically use this plugin.

### Configuration
This plugin adds two configurable keys to Prettier:
- [`cssDeclarationSorterOrder`](https://github.com/Siilwyn/css-declaration-sorter#order) defaults to `concentric-css`.
- [`cssDeclarationSorterKeepOverrides`](https://github.com/Siilwyn/css-declaration-sorter#keepoverrides) defaults to `true`, for a new codebase `false` is recommended.

[npm]: https://www.npmjs.com/package/prettier-plugin-css-order
[npm-badge]: https://tinyshields.dev/npm/prettier-plugin-css-order.svg
