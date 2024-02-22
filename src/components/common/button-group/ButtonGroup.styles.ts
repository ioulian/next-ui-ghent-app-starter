import { css } from "@/styled-system/css";

export const buttonGroup = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "0.75rem",
  "& > hr": {
    width: "1px",
    borderWidth: 0,
    backgroundColor: "currentColor",
    height: "1.25rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
});

export const alignRight = css({ justifyContent: "flex-end!" });
