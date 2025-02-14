/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: ['**/*.json'],
      options: {
        useTabs: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}
