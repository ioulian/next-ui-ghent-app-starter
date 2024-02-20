import { style, globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const pagination = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
});

export const paginationPage = style({
  display: "block",
  cursor: "pointer",
  borderRadius: "4px",
  border: "1px solid rgba(115,117,117,0.1)",
  transition: `color ${vars.timing.fast}, background-color ${vars.timing.fast}, border-color ${vars.timing.fast}`,
  selectors: {
    "&:hover": {
      backgroundColor: vars.color.brand,
      color: vars.color.white,
    },
  },
});

export const paginationPageLink = style({
  display: "block",
  color: "inherit",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  padding: "0.375rem 0.75rem",
  fontWeight: "700",
});

export const paginationPageSelected = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
});

export const paginationPreviousPageLink = style([paginationPageLink]);
export const paginationNextPageLink = style([paginationPageLink]);
export const paginationBreakPageLink = style([paginationPageLink]);

export const paginationDisabled = style({
  pointerEvents: "none",
  opacity: "0.5",
});

globalStyle(`${pagination} svg`, {
  width: "0.75rem",
  height: "0.75rem",
  margin: "0.125rem",
  display: "block",
});
