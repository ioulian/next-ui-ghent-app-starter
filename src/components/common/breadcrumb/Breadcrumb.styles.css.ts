import { style, globalStyle } from "@vanilla-extract/css";

export const nav = style({});

export const ol = style({
  listStyle: "none",
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const li = style({
  selectors: {
    "&:not(:first-child)::before": {
      content: "/",
      marginRight: "0.75rem",
    },
  },
});

globalStyle(`${li}:last-child a`, {
  textDecoration: "none",
  color: "inherit",
});
