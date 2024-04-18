import { sva } from "@/styled-system/css";

export const backgroundColorVar = "--circular-progress-background-color";
export const mainColorVar = "--circular-progress-main-color";

export const circularProgress = sva({
  slots: ["root", "progress", "background"],
  base: {
    root: {
      position: "relative",
      display: "block",
      width: "4rem",
      height: "4rem",
    },
    progress: {
      position: "absolute",
      transformOrigin: "center center",
      transform: "rotate(-90deg)",
      stroke: `var(${mainColorVar})`,
      strokeWidth: "8px",
    },
    background: {
      strokeWidth: "8px",
      stroke: `var(${backgroundColorVar})`,
    },
  },
});
