import { createGlobalThemeContract, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract(
  {
    color: {
      body: "color-body",
      brand: "color-brand",
      brandDarker: "color-brand-darker",
      brandLighter: "color-brand-lighter",
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
    form: {
      input: {
        color: "form-input-color",
        border: "form-input-border",
        background: "form-input-background",
        shadow: "form-input-shadow",
      },
      select: {
        indicator: "form-select-indicator",
      },
      asterisk: {
        color: "form-asterisk-color",
      },
      outline: {
        color: "form-outline-color",
      },
      checkbox: {
        checked: {
          border: "form-checkbox-checked-border",
          background: "form-checkbox-checked-background",
          color: "form-checkbox-checked-color",
        },
      },
      requiredMessage: {
        color: "form-requiredMessage-color",
      },
      error: {
        color: "form-error-color",
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
    brandLighter: "#3345e8",
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
  form: {
    input: {
      color: "#000",
      border: "rgba(0, 0, 0, 0.6)",
      background: "rgba(239, 242, 243, 0.2)",
      shadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    },
    select: {
      indicator: "rgba(0, 0, 0, 0.6)",
    },
    asterisk: {
      color: "#b30000",
    },
    outline: {
      color: "#000",
    },
    checkbox: {
      checked: {
        border: "#f38a5d",
        background: "#f38a5d",
        color: "#fff",
      },
    },
    requiredMessage: {
      color: "#b30000",
    },
    error: {
      color: "#b30000",
    },
  },
};

createGlobalTheme(":root", vars, defaultTheme);
