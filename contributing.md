# Contributing
To setup and test, follow these steps:

```sh
git clone https://github.com/Siilwyn/prettier-plugin-css-order.git
cd css-declaration-sorter
npm ci
npm test
```

## General Prerequisites
Node.js, [latest LTS is recommended](https://nodejs.org/en/about/releases/).

### Tips
1. Try out a change to this package in another project with `npm link`.

1. Changes in order behaviour or new CSS properties are done upstream in [css-declaration-sorter](https://github.com/Siilwyn/css-declaration-sorter/).

## Git Commit Messages
Write the message in present tense beginning with an uppercase letter, structured like this:

```
<subject>
<BLANK LINE>
<body>
```

Example

```
Test if shorthand data properties are known

Closes #1
```
