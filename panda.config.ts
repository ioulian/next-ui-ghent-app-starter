import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    margin: 0,
    padding: 0,
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
    _motionReduce: {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto",
    },
  },
  html: {
    _motionReduce: {
      _focusWithin: {
        scrollBehavior: "auto",
      },
    },
  },
  body: {
    fontFamily: "body",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: "body",
    letterSpacing: "0.01em",
  },
  p: {
    marginTop: 0,
    marginBottom: 0,
  },
  hr: {
    width: "100%",
    height: "1px",
    border: 0,
    backgroundColor: "currentColor",
    margin: 0,
  },
  "ul, ol": {
    marginTop: 0,
    marginBottom: 0,
    listStyle: "none",
    paddingLeft: 0,
  },
  a: {
    color: "primary",
    _hover: {
      textDecoration: "none",
    },
  },
  button: {
    border: 0,
    appearance: "none",
    background: "none",
    cursor: "pointer",
    color: "inherit",
    padding: 0,
    fontSize: "inherit",
  },
  // Remove 300ms delay on buttons:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation
  "a, button, input[type='button'], input[type='submit']": {
    touchAction: "manipulation",
  },
  "button, input, select, textarea, a": {
    outlineOffset: "4px",
    _focusVisible: {
      outline: "2px solid primary",
    },
  },
  "picture, img, svg, video": {
    display: "block",
    maxWidth: "100%",
    height: "auto",
  },
  svg: {
    width: "100%",
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: 0,
    fontFamily: "heading",
    fontWeight: 700,
  },
});

export default defineConfig({
  importMap: "@/styled-system",

  //hash: { cssVar: false, className: true },

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
