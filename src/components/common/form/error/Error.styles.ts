import { css } from "@/styled-system/css";

export const error = css({
  color: "form.error",
  fontSize: "0.875rem",
  fontWeight: 700,
  "& + *": {
    marginTop: "0.25rem",
  },
});
