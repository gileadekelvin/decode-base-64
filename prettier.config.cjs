/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "all",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
