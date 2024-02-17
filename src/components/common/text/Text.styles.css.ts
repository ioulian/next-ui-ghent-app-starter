import { style, globalStyle } from "@vanilla-extract/css";

export const text = style({
  fontSize: "1rem",
  lineHeight: "150%",
  letterSpacing: "-0.02em",
});

globalStyle(`${text} > * + *`, {
  marginTop: "1.5rem",
});

globalStyle(`${text} ul li::before, ${text} ol li::before`, {
  marginRight: "0.5rem",
});

globalStyle(`${text} ul li::before`, {
  content: "-",
});

globalStyle(`${text} ol`, {
  counterReset: "ol",
});

globalStyle(`${text} ol li::before`, {
  counterIncrement: "ol",
  content: 'counter(ol) "."',
});
