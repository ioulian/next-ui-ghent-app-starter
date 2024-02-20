import { style, createVar, keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const backgroundColorVar = createVar();
export const primaryColorVar = createVar();
export const secondaryColorVar = createVar();

export const spinner = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.75rem",
  lineHeight: 1,
  backgroundColor: backgroundColorVar,
});

export const fullWidth = style({
  width: "100%",
});

export const fullHeight = style({
  height: "100%",
});

export const spinnerInner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const spinnerElement = style({
  display: "block",
  borderWidth: "2px",
  borderStyle: "solid",
  borderTopColor: primaryColorVar,
  borderRightColor: secondaryColorVar,
  borderBottomColor: secondaryColorVar,
  borderLeftColor: secondaryColorVar,
  borderRadius: "50%",
  animation: `${rotate} 1s linear infinite`,
  width: "16px",
  height: "16px",
});

export const spinnerLabel = style({
  display: "block",
  fontSize: "0.875rem",
  lineHeight: 1,
});
