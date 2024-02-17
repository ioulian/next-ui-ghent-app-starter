import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

const base = style({
  fontFamily: vars.font.heading,
  fontWeight: "700",
  letterSpacing: "-0.02em",
  margin: "0",
});

export const heading = styleVariants({
  display: [base, { fontSize: "2rem", lineHeight: 1.24 }],
  h1: [base, { fontSize: "1.75rem", lineHeight: 1.24 }],
  h2: [base, { fontSize: "1.5rem", lineHeight: 1.24 }],
  h3: [base, { fontSize: "1.25rem", lineHeight: 1.5 }],
  h4: [base, { fontSize: "1rem", lineHeight: 1.5 }],
  h5: [base, { fontSize: "0.875rem", lineHeight: 1.5 }],
  h6: [base, { fontSize: "0.75rem", lineHeight: 1.5 }],
});
