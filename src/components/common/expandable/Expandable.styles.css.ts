import { style, globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const expandable = style({});

export const expandableOpen = style({});

export const expandableContainer = style({
  paddingTop: "1rem",
});

export const expandableSummary = style({
  fontWeight: 700,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
});

export const expandableSummaryIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  transition: `transform ${vars.timing.normal}`,
});

globalStyle(`${expandable}${expandableOpen} > ${expandableSummary} > ${expandableSummaryIcon}`, {
  transform: "rotate(180deg)",
});
