import { style } from "@vanilla-extract/css";

export const a = style({
  textDecoration: "none",

  selectors: {
    "&:hover, &:focus": {
      textDecoration: "underline",
    },
  },
});

export const activeA = style({
  textDecoration: "underline",
});
