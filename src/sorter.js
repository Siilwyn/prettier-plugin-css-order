const postcss = require("postcss");
const cssDeclarationSorter = require("css-declaration-sorter");
const { runAsWorker } = require("sync-threads");

runAsWorker(async ({ text, pluginOptions }) => {
  return postcss([cssDeclarationSorter(pluginOptions)])
    .process(text, { from: undefined })
    .then((result) => result.css);
});
