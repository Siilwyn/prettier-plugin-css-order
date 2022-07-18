const postcss = require("postcss");
const cssDeclarationSorter = require("css-declaration-sorter");
const { runAsWorker } = require("sync-threads");
const postcssLess = require("postcss-less");
const postcssScss = require("postcss-scss");

runAsWorker(async ({ text, parser, pluginOptions }) => {
  let syntax;

  switch(parser) {
    case "less":
      syntax = postcssLess;
      break;
    case "scss":
      syntax = postcssScss;
      break;
  }

  return postcss([cssDeclarationSorter(pluginOptions)])
    .process(text, {
      from: undefined,
      syntax,
    })
    .then((result) => result.css);
});
