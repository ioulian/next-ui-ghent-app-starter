import { css, cva } from "@/styled-system/css";

export const expandable = css({});

export const expandableSummaryIcon = cva({
  base: {
    width: "1.5rem",
    height: "1.5rem",
    transition: "transform",
    transitionDuration: "normal",
  },
  variants: {
    isOpen: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const expandableContainer = css({
  paddingTop: "1rem",
});

export const expandableSummary = css({
  fontWeight: 700,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
});
