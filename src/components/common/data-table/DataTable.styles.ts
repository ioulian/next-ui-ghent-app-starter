import { css } from "@/styled-system/css";

export const wrapper = css({});

export const tdTh = css({
  padding: "0.5rem 1rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "secondary.200",
});

export const table = css({
  borderSpacing: "0",
  width: "100%",
  maxWidth: "100%",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "secondary.200",
});

export const tableHead = css({
  fontWeight: 700,
  whiteSpace: "nowrap",
  textAlign: "left",
});

export const tableFooter = css({
  fontWeight: 700,
  whiteSpace: "nowrap",
  textAlign: "left",
});

export const tableHeadThButton = css({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});

export const tableBodyTd = css({
  wordBreak: "break-word",
});

export const sortable = css({
  cursor: "pointer",
});

export const sort = css({
  width: "1rem",
  height: "1rem",
  color: "#b5b5b5",
  flexShrink: 0,
});

export const footerControls = css({
  marginTop: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
