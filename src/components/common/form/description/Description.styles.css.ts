import { globalStyle, style } from "@vanilla-extract/css";

import { error } from "../error/Error.styles.css";

export const description = style({
  fontSize: "0.875rem",
});

globalStyle(`${description} a`, {
  color: "inherit",
});

globalStyle(`${description} + ${error}`, {
  marginTop: "0.25rem",
});
