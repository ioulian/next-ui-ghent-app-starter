import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const error = style({
  color: vars.form.error.color,
  fontSize: "0.875rem",
  fontWeight: 700,
});
