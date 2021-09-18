// tailwind.config.js

const { colors } = require("./src/theme/theme");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    colors,
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  variants: {},
  plugins: [],
};
