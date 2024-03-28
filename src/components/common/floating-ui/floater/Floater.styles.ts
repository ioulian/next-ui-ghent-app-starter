import { css, cva } from "@/styled-system/css";

export const floater = cva({
  base: {
    backgroundColor: "white",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    padding: "5px",
    _focus: {
      outline: "none",
    },
  },
  variants: {
    asSheet: {
      true: {
        position: "absolute",
      },
      false: {
        top: 0,
        left: 0,
        maxWidth: "calc(100vw - {spacing.floating.floater.shift} * 2)",
        borderRadius: "normal",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "primary.500",
      },
    },
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

export const floaterArrow = css({
  position: "absolute",
  borderTopWidth: 1,
  borderTopStyle: "solid",
  borderTopColor: "primary.500",
  borderRightWidth: 1,
  borderRightStyle: "solid",
  borderRightColor: "primary.500",
  backgroundColor: "white",
  width: "calc({spacing.floating.floater.arrow.size} - 2px)", // Account for 1px border on each side
  height: "calc({spacing.floating.floater.arrow.size} - 2px)", // Account for 1px border on each side
  content: "",
  display: "block",
});
