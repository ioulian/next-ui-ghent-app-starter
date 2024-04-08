import { cva } from "@/styled-system/css";

export const sheet = cva({
  base: {
    position: "absolute",
    backgroundColor: "white",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    padding: "5px",
    _focus: {
      outline: "none",
    },
  },
  variants: {
    placement: {
      top: {
        width: "100%",
        maxHeight: "350px",
        left: 0,
        right: 0,
        top: 0,
      },
      bottom: {
        width: "100%",
        maxHeight: "350px",
        left: 0,
        right: 0,
        bottom: 0,
      },
      right: {
        height: "100%",
        width: "350px",
        right: 0,
        top: 0,
        bottom: 0,
      },
      left: {
        height: "100%",
        maxWidth: "350px",
        left: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});
