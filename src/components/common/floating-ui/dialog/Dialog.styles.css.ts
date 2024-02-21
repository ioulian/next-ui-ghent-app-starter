import { css } from "@/styled-system/css";

export const floatingOverlay = css({
  backgroundColor: "black/50",
  display: "grid",
  placeItems: "center",
  padding: "1rem",
  backdropFilter: "blur(10px)",
});
