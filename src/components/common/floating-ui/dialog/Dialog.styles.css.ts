import { cva } from "@/styled-system/css";

export const floatingOverlay = cva({
  base: {
    backgroundColor: "black/50",
    backdropFilter: "blur(10px)",
  },
  variants: {
    asSheet: {
      false: {
        display: "grid",
        placeItems: "center",
        padding: "1rem",
      },
    },
  },
});
