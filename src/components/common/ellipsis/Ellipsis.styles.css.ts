import { style, globalStyle, createVar } from "@vanilla-extract/css";

import { button } from "@/components/common/button/Button.styles.css";

export const numberOfLinesVar = createVar();

export const ellipsisLineClamp = style({
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: numberOfLinesVar,
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const ellipsis = style({});
export const ellipsisContent = style({});
export const ellipsisHelperContent = style([
  ellipsisContent,
  {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    opacity: "0",
    pointerEvents: "none",
  },
  ellipsisLineClamp,
]);

export const ellipsisContentContainer = style({
  position: "relative",
});

globalStyle(`${ellipsis} > ${button().split(" ")[0]}`, {
  marginTop: "1rem",
});
