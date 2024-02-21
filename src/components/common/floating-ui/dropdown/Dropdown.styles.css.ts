import { css } from "@/styled-system/css";

export const menuWrapper = css({
  "& > button": {
    width: "100%",
    display: "block",
    "&:not(:first-child)": {
      marginTop: "0.25rem",
    },
  },
});
