/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: false,
  trailingComma: 'none',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
  printWidth: 100
}

export default config
