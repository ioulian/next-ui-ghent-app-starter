import { css } from "@/styled-system/css";

export const reactSelectContainer = css({
  "& + *:not(button, label)": {
    marginTop: "0.25rem",
  },
});
