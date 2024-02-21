import { css } from "@/styled-system/css";

export const description = css({
  fontSize: "0.875rem",
  "& a": {
    color: "inherit",
  },
  "& + *": {
    marginTop: "0.25rem",
  },
});
