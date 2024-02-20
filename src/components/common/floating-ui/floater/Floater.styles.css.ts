import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const floater = style({
  top: 0,
  left: 0,
  border: `1px solid ${vars.color.brand}`,
  backgroundColor: vars.color.white,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
  borderRadius: vars.borderRadius.normal,
  padding: "5px",
  maxWidth: `calc(100vw - ${vars.floatingUI.floater.shift} * 2)`,
  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

export const floaterArrow = style({
  position: "absolute",
  borderTop: `1px solid ${vars.color.brand}`,
  borderRight: `1px solid ${vars.color.brand}`,
  backgroundColor: vars.color.white,
  width: `calc(${vars.floatingUI.floater.arrow.size} - 2px)`, // Account for 1px border on each side
  height: `calc(${vars.floatingUI.floater.arrow.size} - 2px)`, // Account for 1px border on each side
  content: "",
  display: "block",
});
