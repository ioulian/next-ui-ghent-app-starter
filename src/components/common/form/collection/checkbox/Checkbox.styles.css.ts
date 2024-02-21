import { globalStyle, style } from "@vanilla-extract/css";

import { label } from "../../label/Label.styles.css";

export const checkboxContainer = style({
  display: "flex",
  alignItems: "center",
});

globalStyle(`${checkboxContainer} > input`, {
  marginRight: "0.5rem",
});

globalStyle(`${checkboxContainer} > input:disabled + ${label}`, {
  cursor: "not-allowed",
});

globalStyle(`${checkboxContainer} ${label}`, {
  marginBottom: 0,
});
