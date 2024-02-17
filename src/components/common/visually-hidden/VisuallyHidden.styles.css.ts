import { style } from "@vanilla-extract/css";

export const visuallyHidden = style({
  position: "absolute !important" as "absolute",
  height: "1px",
  width: "1px",
  overflow: "hidden",
  clip: "rect(1px, 1px, 1px, 1px)",
  marginTop: "-1px",
});
