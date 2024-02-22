import { css } from "@/styled-system/css";

export const pagination = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  "& svg": {
    width: "0.75rem",
    height: "0.75rem",
    margin: "0.125rem",
    display: "block",
  },
});

export const paginationPage = css({
  display: "block",
  cursor: "pointer",
  borderRadius: "4px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "black/10",
  transition: "colors",
  transitionDuration: "fast",
  _hover: {
    backgroundColor: "primary.500",
    color: "white",
  },
});

export const paginationPageLink = css({
  display: "block",
  color: "inherit",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  padding: "0.375rem 0.75rem",
  fontWeight: "700",
  cursor: "pointer",
});

export const paginationPageSelected = css({
  backgroundColor: "primary.500",
  color: "white",
});

export const paginationDisabled = css({
  pointerEvents: "none",
  opacity: "0.5",
});
