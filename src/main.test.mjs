import { format } from "prettier";
import assert from "assert";
import plugin from "./main.mjs";

assert.strictEqual(
  await format("a{font-size: 1rem; height: 1rem;}", {
    parser: "css",
    plugins: [plugin],
  }),
  "a {\n  height: 1rem;\n  font-size: 1rem;\n}\n",
  "sorts given CSS",
);

assert.strictEqual(
  await format("a{height: 1rem; margin-left: -#{$grid-default-gutter / 2};}", {
    parser: "scss",
    plugins: [plugin],
  }),
  "a {\n  margin-left: -#{$grid-default-gutter / 2};\n  height: 1rem;\n}\n",
  "sorts given SCSS",
);

assert.strictEqual(
  await format("a{\n // something \n font-size: @hi; \n height: 1rem; \n }", {
    parser: "less",
    plugins: [plugin],
  }),
  "a {\n  height: 1rem;\n  // something\n  font-size: @hi;\n}\n",
  "sorts given Less",
);

assert.rejects(
  () => format("/*/*/* x", { parser: "css", plugins: [plugin] }),
  "surfaces errors to Prettier",
);

assert.strictEqual(
  await format(
    "<style>a{\n font-size: 100%; /* font-size comment */ \n height: 1rem; \n }</style>",
    {
      parser: "html",
      plugins: [plugin],
    },
  ),
  "<style>\n  a {\n    height: 1rem;\n    font-size: 100%; /* font-size comment */\n  }\n</style>\n",
  "sorts embedded CSS with comment",
);

assert.strictEqual(
  await format(
    "a{\n font-size: 100%; /* font-size comment */ \n height: 1rem; \n }",
    {
      parser: "css",
      plugins: [plugin],
    },
  ),
  "a {\n  height: 1rem;\n  font-size: 100%; /* font-size comment */\n}\n",
  "sorts CSS with comment",
);
