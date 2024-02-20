import { style, globalStyle } from "@vanilla-extract/css";

export const alignRight = style({ justifyContent: "flex-end" });

export const buttonGroup = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "0.75rem",
});

globalStyle(`${buttonGroup} > hr`, {
  width: "1px",
  border: 0,
  backgroundColor: "currentColor",
  height: "1.25rem",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
});
