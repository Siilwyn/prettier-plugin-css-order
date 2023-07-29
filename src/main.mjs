import prettierPostcss from "prettier/parser-postcss";
import postcss from "postcss";
import { cssDeclarationSorter } from "css-declaration-sorter";
import postcssLess from "postcss-less";
import postcssScss from "postcss-scss";

const syntaxMapping = {
  less: postcssLess,
  scss: postcssScss,
};

function parseSort(text, options) {
  return postcss([
    cssDeclarationSorter({
      order: options.cssDeclarationSorterOrder,
      keepOverrides: options.cssDeclarationSorterKeepOverrides,
    }),
  ])
    .process(text, {
      from: undefined,
      syntax: syntaxMapping[options.parser],
    })
    .then((result) => result.css)
    .then((sortedCss) => {
      options.originalText = sortedCss;
      return prettierPostcss.parsers[options.parser].parse(
        sortedCss,
        [options.parser],
        options,
      );
    });
}

export default {
  options: {
    cssDeclarationSorterOrder: {
      type: "choice",
      description: "One of the built-in sort orders.",
      category: "css-declaration-sorter",
      default: "concentric-css",
      choices: [
        {
          value: "alphabetical",
          description:
            "Default, order in a simple alphabetical manner from a - z.",
        },
        {
          value: "smacss",
          description:
            "Order from most important, flow affecting properties, to least important properties.",
        },
        {
          value: "concentric-css",
          description:
            "Order properties applying outside the box model, moving inward to intrinsic changes.",
        },
      ],
    },
    cssDeclarationSorterKeepOverrides: {
      type: "boolean",
      description: "",
      category: "css-declaration-sorter",
      default: true,
    },
  },
  parsers: {
    css: {
      ...prettierPostcss.parsers.css,
      parse: parseSort,
    },
    less: {
      ...prettierPostcss.parsers.less,
      parse: parseSort,
    },
    scss: {
      ...prettierPostcss.parsers.scss,
      parse: parseSort,
    },
  },
};
