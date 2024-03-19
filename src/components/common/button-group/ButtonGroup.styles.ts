import { sva } from "@/styled-system/css";

export const buttonGroup = sva({
  slots: ["root", "separator"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    separator: {
      width: "1px",
      borderWidth: 0,
      backgroundColor: "currentColor",
      height: "1.25rem",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
  },
  variants: {
    align: {
      start: {
        root: { justifyContent: "flex-start" },
      },
      end: {
        root: { justifyContent: "flex-end" },
      },
    },
  },
  defaultVariants: {
    align: "start",
  },
});
