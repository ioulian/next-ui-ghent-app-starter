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
    borderRadius: {
      normal: "border-radius-normal",
    },
    floatingUI: {
      tooltip: {
        offset: "floating-ui-tooltip-offset",
      },
      popover: {
        offset: "floating-ui-popover-offset",
      },
      dropdown: {
        offset: "floating-ui-dropdown-offset",
      },
      floater: {
        shift: "floating-ui-floater-shift",
        flip: "floating-ui-floater-flip",
        arrow: {
          size: "floating-ui-floater-arrow-size",
          padding: "floating-ui-floater-arrow-padding",
        },
      },
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
  borderRadius: {
    normal: "4px",
  },
  floatingUI: {
    tooltip: {
      offset: "10px",
    },
    popover: {
      offset: "10px",
    },
    dropdown: {
      offset: "10px",
    },
    floater: {
      shift: "5px",
      flip: "5px",
      arrow: {
        size: "10px",
        padding: "10px",
      },
    },
  },
};

createGlobalTheme(":root", vars, defaultTheme);
