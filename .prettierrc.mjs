/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  tailwindConfig: "./tailwind.config.ts",
  singleQuote: true,
  semi: true,
  trailingComma: "es5",
  printWidth: 150,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
