import { css } from "@/styled-system/css";

export const a = css({
  textDecoration: "none",

  "&:hover, &:focus": {
    textDecoration: "underline",
  },
});

export const activeA = css({
  textDecoration: "underline",
});
