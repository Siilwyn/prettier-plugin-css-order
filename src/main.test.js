const prettier = require("prettier");
const assert = require("assert");

assert.strictEqual(
  prettier.format("a{font-size: 1rem; height: 1rem;}", {
    parser: "css",
    plugins: ["."],
  }),
  "a {\n  height: 1rem;\n  font-size: 1rem;\n}\n",
  "sorts given CSS"
);

assert.strictEqual(
  prettier.format(
    "a{height: 1rem; margin-left: -#{$grid-default-gutter / 2};}",
    {
      parser: "scss",
      plugins: ["."],
    }
  ),
  "a {\n  margin-left: -#{$grid-default-gutter / 2};\n  height: 1rem;\n}\n",
  "sorts given SCSS"
);

assert.strictEqual(
  prettier.format(
    "a{\n // something \n font-size: @hi; \n height: 1rem; \n }",
    {
      parser: "less",
      plugins: ["."],
    }
  ),
  "a {\n  height: 1rem;\n  // something\n  font-size: @hi;\n}\n",
  "sorts given Less"
);

assert.throws(
  () => prettier.format("/*/*/* x", { parser: "css", plugins: ["."] }),
  "surfaces errors to Prettier"
);
