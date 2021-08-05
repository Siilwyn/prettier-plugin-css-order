# CSS Order Prettier Plugin
[![LGTM Grade][lgtm-badge]][lgtm]
[![npm][npm-badge]][npm]

A [Prettier](https://prettier.io/) plugin to sort CSS, SCSS or Less declarations based on their property names.  
Using [css-declaration-sorter](https://github.com/Siilwyn/css-declaration-sorter/) under the hood.

## Usage
Following the Prettier plugin guidelines, this package depends on Prettier as a peer dependency:  
`npm install postcss prettier-plugin-css-order --save-dev`

After installation Prettier should automatically use this plugin.

### Configuration
This plugin adds two configurable keys to Prettier:
- [`order`](https://github.com/Siilwyn/css-declaration-sorter#order) defaults to `concentric-css`.
- [`keepOverrides`](https://github.com/Siilwyn/css-declaration-sorter#keepoverrides) defaults to `true`, for a new codebase `false` is recommended.

[lgtm]: https://lgtm.com/projects/g/Siilwyn/prettier-plugin-css-order/
[lgtm-badge]: https://tinyshields.dev/lgtm/grade/javascript/g/Siilwyn/prettier-plugin-css-order.svg
[npm]: https://www.npmjs.com/package/prettier-plugin-css-order
[npm-badge]: https://tinyshields.dev/npm/prettier-plugin-css-order.svg
