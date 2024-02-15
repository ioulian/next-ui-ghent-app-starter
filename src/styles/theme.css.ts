import { createGlobalThemeContract, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract(
  {
    color: {
      body: "color-body",
      brand: "color-brand",
    },
    font: {
      body: "font-body",
      heading: "font-heading",
    },
  },
  (value) => `app-${value}`,
);

createGlobalTheme(":root", vars, {
  color: {
    body: "#111111",
    brand: "#0516e4",
  },
  font: {
    body: "var(--app-font-body)",
    heading: "var(--app-font-body)",
  },
});
