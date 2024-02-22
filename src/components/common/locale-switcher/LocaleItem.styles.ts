import { css } from "@/styled-system/css";

export const a = css({
  textDecoration: "none",
  _hover: {
    textDecoration: "underline",
  },
  _focus: {
    textDecoration: "underline",
  },
});

export const activeA = css({
  textDecoration: "underline",
});
