const prettier = require("prettier");
const assert = require("assert");

assert.strictEqual(
  prettier.format("a{font-size: 1rem; height: 1rem;}", {
    parser: "scss",
    plugins: ["."],
  }),
  "a {\n  height: 1rem;\n  font-size: 1rem;\n}\n",
  "sorts given CSS"
);

assert.throws(
  () => prettier.format("/*/*/* x", { parser: "css", plugins: ["."] }),
  "surfaces errors to Prettier"
);
