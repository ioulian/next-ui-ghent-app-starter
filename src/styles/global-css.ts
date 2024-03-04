import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "*, *::before, *::after": {
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
    fontSize: { base: "1rem", lg: "1.125rem" },
    lineHeight: { base: "1.25rem", lg: "1.5rem" },
    color: "body",
    letterSpacing: "0.01em",
  },
  hr: {
    width: "100%",
    height: "1px",
    border: 0,
    backgroundColor: "currentColor",
  },
  "ul, ol": {
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
  "*": {
    _focusVisible: {
      outline: "2px",
      outlineColor: "primary.500",
      outlineOffset: "4px",
      outlineStyle: "solid",
    },
  },
  svg: {
    width: "100%",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "heading",
    fontWeight: 700,
  },
});
