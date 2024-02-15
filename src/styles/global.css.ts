import { globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto",
    },
  },
});

// Move everything to theme?
globalStyle("body", {
  fontFamily: vars.font.body,
  fontSize: "1rem",
  lineHeight: "1.25rem",
  color: vars.color.body,
  letterSpacing: "0.01em",
});

globalStyle("p", {
  marginTop: 0,
  marginBottom: 0,
});

globalStyle("hr", {
  width: "100%",
  height: "1px",
  border: 0,
  backgroundColor: "currentColor",
  margin: 0,
});

globalStyle("ul, ol", {
  marginTop: 0,
  marginBottom: 0,
  listStyle: "none",
  paddingLeft: 0,
});

globalStyle("a", {
  color: vars.color.brand,
});

globalStyle("a:hover", {
  textDecoration: "none",
});

globalStyle("button", {
  border: 0,
  appearance: "none",
  background: "none",
  cursor: "pointer",
  color: "inherit",
  padding: 0,
  fontSize: "inherit",
});

// Remove 300ms delay on buttons:
// https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation
globalStyle("a, button, input[type='button'], input[type='submit']", {
  touchAction: "manipulation",
});

globalStyle("button, input, select, textarea, a", {
  outlineOffset: "4px",
});

globalStyle(
  "button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, a:focus-visible",
  {
    outline: `2px solid ${vars.color.brand}`,
  },
);

globalStyle("html:focus-within", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      scrollBehavior: "auto",
    },
  },
});

// Prevent overflow of images and remove spacing at the bottom
globalStyle("picture, img, svg, video", {
  display: "block",
  maxWidth: "100%",
  height: "auto",
});

globalStyle("svg", {
  width: "100%",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontFamily: vars.font.heading,
});
