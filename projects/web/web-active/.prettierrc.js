module.exports = {
  endOfLine: 'lf',
  printWidth: 80,
  tabWidth: 2,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrderParserPlugins: ['typescript', 'jsx', 'tsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
  importOrder: [
    '^react',
    '<TYPES>^(node:)',
    '<TYPES>',
    '<TYPES>^[.]',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^(@)(/.*)$',
    '^(@public)(/.*)$',
    '^[.]',
    '^(?!.*[.]css$)[./].*$',
    '.css$'
  ]
}
