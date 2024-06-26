import { css } from "@/styled-system/css";

export const floater = css({
  backgroundColor: "white",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
  padding: "5px",
  top: 0,
  left: 0,
  maxWidth: "calc(100vw - {spacing.floating.floater.shift} * 2)",
  borderRadius: "normal",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "primary.500",
  _focus: {
    outline: "none",
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
