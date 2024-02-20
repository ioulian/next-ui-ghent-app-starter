import { style, globalStyle } from "@vanilla-extract/css";

export const menuWrapper = style({});

globalStyle(`${menuWrapper} > button`, {
  width: "100%",
  display: "block",
});

globalStyle(`${menuWrapper} > button:not(:first-child)`, {
  marginTop: "0.25rem",
});

//globalStyle(`${menuWrapper} > span`, {
//  position: "absolute"
//});
