import { css } from "@/styled-system/css";

export const list = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
  "& + *": {
    marginTop: "0.5rem",
  },
  "& label": {
    fontWeight: 400,
  },
});
