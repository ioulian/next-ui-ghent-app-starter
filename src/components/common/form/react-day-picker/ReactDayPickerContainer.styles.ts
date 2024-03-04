import { css } from "@/styled-system/css";

export const reactDayPickerContainer = css({
  "& + *:not(button, label)": {
    marginTop: "0.25rem",
  },
});
