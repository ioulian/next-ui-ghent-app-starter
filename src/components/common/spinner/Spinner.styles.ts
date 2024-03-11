import { sva } from "@/styled-system/css";

export const backgroundColorVar = "--spinner-background-color";
export const primaryColorVar = "--spinner-primary-color";
export const secondaryColorVar = "--spinner-secondary-color";

export const spinner = sva({
  slots: ["root", "inner", "element", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      lineHeight: 1,
      backgroundColor: `var(${backgroundColorVar})`,
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    element: {
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
    },
    label: {
      display: "block",
      fontSize: "0.875rem",
      lineHeight: 1,
    },
  },
  variants: {
    size: {
      fullWidth: { root: { width: "100%" } },
      fullHeight: { root: { height: "100%" } },
      full: { root: { width: "100%", height: "100%" } },
    },
  },
});
