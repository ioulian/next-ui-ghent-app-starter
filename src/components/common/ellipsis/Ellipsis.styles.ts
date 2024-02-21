import { css } from "@/styled-system/css";

export const numberOfLinesVar = "--ellipsis-number-of-lines";

export const ellipsisLineClamp = css.raw({
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: `var(${numberOfLinesVar})`,
  // @ts-expect-error We need this value, but it's only for webkit
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const ellipsis = css({
  "& > button": {
    marginTop: "1rem",
  },
});

export const ellipsisContent = css.raw({});

export const ellipsisHelperContent = css(
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
);

export const ellipsisContentContainer = css({
  position: "relative",
});
