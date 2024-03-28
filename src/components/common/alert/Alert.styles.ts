import { sva } from "@/styled-system/css";

export const alert = sva({
  slots: ["root", "icon", "content"],
  base: {
    root: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "currentColor",
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
        fill: "currentColor",
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
          color: "rgb(0, 171, 251)",
        },
      },
      danger: {
        root: {
          color: "rgb(255, 69, 0)",
        },
      },
      success: {
        root: {
          color: "rgb(0, 153, 136)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});
