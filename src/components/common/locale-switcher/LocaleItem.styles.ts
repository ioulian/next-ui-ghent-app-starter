import { cva } from "@/styled-system/css";

export const a = cva({
  base: {
    textDecoration: "none",
    _hover: {
      textDecoration: "underline",
    },
    _focus: {
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
