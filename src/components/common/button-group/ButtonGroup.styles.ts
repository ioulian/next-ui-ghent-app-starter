import { cva } from "@/styled-system/css";

export const buttonGroup = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    '& > [role="separator"]': {
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
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
  },
  defaultVariants: {
    align: "start",
  },
});
