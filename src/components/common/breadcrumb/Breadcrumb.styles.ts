import { css } from "@/styled-system/css";

export const nav = css({});

export const ol = css({
  listStyle: "none",
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const li = css({
  "&:not(:first-child)": {
    _before: {
      content: '"/"',
      marginRight: "0.75rem",
    },
  },
  "&:last-child a": { textDecoration: "none", color: "inherit" },
});
