import { defineConfig } from "@pandacss/dev";

import { globalCss } from "@/styles/global-css";
import tokens from "@/styles/theme/tokens";
import semanticTokens from "@/styles/theme/semanticTokens";

export default defineConfig({
  importMap: "@/styled-system",

  hash: { cssVar: false, className: process.env.NODE_ENV !== "development" },

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      notLastChild: "&:not(:last-child)",
      notFirstChild: "&:not(:first-child)",
      dark: '.dark &, [data-theme="dark"] &',
      light: ".light &",
    },
  },

  // Useful for theme customization
  theme: {
    extend: {},
    tokens,
    semanticTokens,
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Strict TS checks
  strictPropertyValues: true,

  // Globals css
  globalCss,
});
