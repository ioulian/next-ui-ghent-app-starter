import { globalStyle, style } from "@vanilla-extract/css";

import { description } from "../description/Description.styles.css";
import { error } from "../error/Error.styles.css";

export const list = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
});

globalStyle(`${list} + ${description}, ${list} + ${error}`, {
  marginTop: "0.5rem",
});

globalStyle(`${list} label`, {
  fontWeight: 400,
});
