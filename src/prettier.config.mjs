export default {
  singleQuote: true,
  trailingComma: "none",
  tabWidth: 4,
  semi: false,
  useTabs: true,
  arrowParens: "avoid",
  jsxSingleQuote: true,
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "typescript",
  ],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)$", "^./(.*)$"],
};
