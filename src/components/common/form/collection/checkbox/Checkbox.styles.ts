import { css } from "@/styled-system/css";

export const checkboxContainer = css({
  display: "flex",
  alignItems: "center",
  "& > input": {
    marginRight: "0.5rem",
    "&:disabled + label": {
      cursor: "not-allowed",
    },
  },
  "& label": {
    marginBottom: 0,
  },
});
