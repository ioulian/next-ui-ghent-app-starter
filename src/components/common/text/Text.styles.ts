import { css } from "@/styled-system/css";

export const text = css({
  //fontSize: "1rem",
  //lineHeight: "150%",
  letterSpacing: "-0.02em",
  "& > * + *": {
    marginTop: { base: "1.25rem", lg: "1.5rem" },
  },
  "& ul, & ol": {
    "& li": {
      _before: {
        marginRight: "0.5rem",
      },
    },
  },
  "& ul li": {
    _before: {
      content: '"-"',
    },
  },
  "& ol": {
    counterReset: "ol",
    "& li": {
      _before: {
        counterIncrement: "ol",
        content: 'counter(ol) "."',
      },
    },
  },
});
