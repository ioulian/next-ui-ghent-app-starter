import { cva, css } from "@/styled-system/css";

export const backgroundColorVar = "--spinner-background-color";
export const primaryColorVar = "--spinner-primary-color";
export const secondaryColorVar = "--spinner-secondary-color";

export const spinner = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    lineHeight: 1,
    backgroundColor: `var(${backgroundColorVar})`,
  },
  variants: {
    size: {
      fullWidth: { width: "100%" },
      fullHeight: { height: "100%" },
      full: { width: "100%", height: "100%" },
    },
  },
});

export const spinnerInner = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const spinnerElement = css({
  display: "block",
  borderWidth: "2px",
  borderStyle: "solid",
  borderTopColor: `var(${primaryColorVar})`,
  borderRightColor: `var(${secondaryColorVar})`,
  borderBottomColor: `var(${secondaryColorVar})`,
  borderLeftColor: `var(${secondaryColorVar})`,
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
  width: "16px",
  height: "16px",
});

export const spinnerLabel = css({
  display: "block",
  fontSize: "0.875rem",
  lineHeight: 1,
});
