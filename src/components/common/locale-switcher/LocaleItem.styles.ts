import { cva } from "@/styled-system/css";

export const a = cva({
  base: {
    textDecoration: "none",
    _isHoverFocus: {
      textDecoration: "underline",
    },
  },
  variants: {
    isActive: {
      true: {
        textDecoration: "underline",
      },
    },
  },
});
