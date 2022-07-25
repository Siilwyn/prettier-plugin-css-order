const postcss = require("postcss");
const cssDeclarationSorter = require("css-declaration-sorter");
const { runAsWorker } = require("sync-threads");
const postcssLess = require("postcss-less");
const postcssScss = require("postcss-scss");

runAsWorker(async ({ text, parser, pluginOptions }) => {
  const syntaxMapping = {
    less: postcssLess,
    scss: postcssScss,
  };

  return postcss([cssDeclarationSorter(pluginOptions)])
    .process(text, {
      from: undefined,
      syntax: syntaxMapping[parser],
    })
    .then((result) => result.css);
});
