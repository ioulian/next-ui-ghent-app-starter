import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
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
    fontSize: { base: "1rem", lg: "1.125rem" },
    lineHeight: { base: "1.25rem", lg: "1.5rem" },
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
