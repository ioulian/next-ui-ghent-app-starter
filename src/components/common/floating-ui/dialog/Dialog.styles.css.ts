import { style } from "@vanilla-extract/css";

export const floatingOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "grid",
  placeItems: "center",
  padding: "1rem",
  backdropFilter: "blur(10px)",
});
