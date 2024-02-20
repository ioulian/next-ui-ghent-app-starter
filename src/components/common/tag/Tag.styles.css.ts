import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const tag = style({
  fontSize: "0.625rem",
  lineHeight: "calc(1.5rem - 2px)",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  border: `1px solid ${vars.color.body}`,
  display: "inline-block",
  fontWeight: 700,
  borderRadius: "3px",
});
