import { defineConfig } from "@pandacss/dev";

import { globalCss } from "@/styles/global-css";
import { colors } from "@/styles/theme/colors";
import { fonts } from "@/styles/theme/fonts";
import { durations } from "@/styles/theme/durations";
import { animations } from "@/styles/theme/animations";
import { radii } from "@/styles/theme/radii";
import { spacing } from "@/styles/theme/spacing";
import { assets } from "@/styles/theme/assets";
import { shadows } from "@/styles/theme/shadows";

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
    tokens: {
      assets,
      spacing,
      shadows,
      colors,
      radii,
      fonts,
      animations,
      durations,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Strict TS checks
  strictPropertyValues: true,

  // Globals css
  globalCss,
});
