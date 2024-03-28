import { sva } from "@/styled-system/css";

export const alert = sva({
  slots: ["root", "icon", "content"],
  base: {
    root: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "current",
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      padding: "0.75rem",
      borderRadius: "normal",
    },
    icon: {
      "& svg": {
        width: "1.5rem",
        height: "1.5rem",
        fill: "current",
      },
    },
    content: {},
  },
  variants: {
    variant: {
      normal: {
        root: {
          color: "body",
        },
      },
      info: {
        root: {
          color: "primary.500",
          backgroundColor: "primary.50",
        },
      },
      danger: {
        root: {
          color: "negative.500",
          backgroundColor: "negative.50",
        },
      },
      success: {
        root: {
          color: "positive.500",
          backgroundColor: "positive.50",
        },
      },
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});
