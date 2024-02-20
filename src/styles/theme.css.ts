import { createGlobalThemeContract, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract(
  {
    color: {
      body: "color-body",
      brand: "color-brand",
      brandDarker: "color-brand-darker",
      white: "color-white",
      black: "color-black",
    },
    font: {
      body: "font-body",
      heading: "font-heading",
    },
    timing: {
      fast: "timing-fast",
      normal: "timing-normal",
      slow: "timing-slow",
    },
  },
  (value) => `app-${value}`,
);

export const defaultTheme = {
  color: {
    body: "#111111",
    brand: "#0017ee",
    brandDarker: "#0f1c97",
    white: "#fff",
    black: "#000",
  },
  font: {
    body: "var(--app-font-body)",
    heading: "var(--app-font-body)",
  },
  timing: {
    fast: "100ms",
    normal: "250ms",
    slow: "400ms",
  },
};

createGlobalTheme(":root", vars, defaultTheme);
