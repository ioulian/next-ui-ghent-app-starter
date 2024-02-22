import { defineTokens } from "@pandacss/dev";

export const assets = defineTokens.assets({
  selectIndicator: {
    value: {
      type: "svg",
      value:
        "<svg width='12' height='8' viewBox='0 0 12 8' fill='#3C4346' xmlns='http://www.w3.org/2000/svg'><path d='M1.41 0.59L-2.62268e-07 2L6 8L12 2L10.59 0.59L6 5.17L1.41 0.59Z' /></svg>",
    },
  },
  checkbox: {
    value: {
      type: "svg",
      value:
        "<svg width='24' height='24' viewBox='0 0 24 24' fill='#ffffff' xmlns='http://www.w3.org/2000/svg'><path d='M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z' /></svg>",
    },
  },
  radio: {
    value: {
      type: "svg",
      value:
        "<svg width='24' height='24' viewBox='0 0 24 24' fill='#ffffff' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='12' /></svg>",
    },
  },
});
