import { css } from "@/styled-system/css";

export const nav = css({});

export const ol = css({});

export const li = css({
  _notFirstChild: {
    _before: {
      content: '"/"',
      marginRight: "0.75rem",
    },
  },
  "&:last-child a": { textDecoration: "none", color: "inherit" },
});
