import { css } from "@/styled-system/css";

export const reactSelectedContainer = css({
  "& + *:not(button, label)": {
    marginTop: "0.25rem",
  },
});
