import { cva } from "@/styled-system/css";

export const heading = cva({
  base: {
    fontFamily: "heading",
    fontWeight: "700",
    color: "heading",
    letterSpacing: "-0.02em",
    margin: 0,
  },
  variants: {
    size: {
      display: { fontSize: "2rem", lineHeight: 1.24 },
      h1: { fontSize: "1.75rem", lineHeight: 1.24 },
      h2: { fontSize: "1.5rem", lineHeight: 1.24 },
      h3: { fontSize: "1.25rem", lineHeight: 1.5 },
      h4: { fontSize: "1rem", lineHeight: 1.5 },
      h5: { fontSize: "0.875rem", lineHeight: 1.5 },
      h6: { fontSize: "0.75rem", lineHeight: 1.5 },
    },
  },
});
