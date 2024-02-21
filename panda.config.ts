import { defineConfig } from "@pandacss/dev";

import { globalCss } from "@/styles/globals";

export default defineConfig({
  importMap: "@/styled-system",

  hash: { cssVar: false, className: false },

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      spacing: {
        floating: {
          tooltip: {
            offset: { value: "10px" },
          },
          popover: {
            offset: { value: "10px" },
          },
          dropdown: {
            offset: { value: "10px" },
          },
          floater: {
            shift: { value: "5px" },
            flip: { value: "5px" },
            arrow: {
              size: { value: "10px" },
              padding: { value: "10px" },
            },
          },
        },
      },
      shadows: {
        input: { value: "0px 4px 4px rgba(0, 0, 0, 0.1)" },
      },
      colors: {
        white: { value: "#fff" },
        black: { value: "#000" },
        primary: {
          400: { value: "#2e40ea" },
          500: { value: "#0017ee" },
          600: { value: "#1020b2" },
        },
        body: { value: "#3C4346" },
        form: {
          input: {
            color: { value: "{colors.body}" },
            border: { value: "{colors.body}" },
            background: { value: "rgba(239, 242, 243, 0.2)" },
          },
          select: {
            indicator: { value: "{colors.body}" },
          },
          asterisk: {
            value: "#b30000",
          },
          outline: {
            value: "{colors.body}",
          },
          checkbox: {
            checked: {
              border: { value: "#f38a5d" },
              background: { value: "#f38a5d" },
              color: { value: "#fff" },
            },
          },
          error: {
            value: "#b30000",
          },
          requiredMessage: {
            value: "{colors.form.error}",
          },
        },
      },
      radii: {
        normal: { value: "4px" },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
        heading: { value: "var(--font-heading), sans-serif" },
      },
      animations: {
        spin: {
          value: "spin 1s linear infinite",
        },
      },
      durations: {
        fast: { value: "100ms" },
        normal: { value: "250ms" },
        slow: { value: "400ms" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Strict TS checks
  strictPropertyValues: true,

  // Globals css
  globalCss,
});
