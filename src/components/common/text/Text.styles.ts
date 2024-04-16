import { css } from "@/styled-system/css";

export const text = css({
  "& > * + *": {
    marginTop: { base: "1.25rem", lg: "1.5rem" },
  },
  "& ul, & ol": {
    paddingLeft: "1.5rem",
  },
  "& ul": {
    listStyle: "disc outside",
  },
  "& ol": {
    listStyle: "decimal outside",
  },
  "& hr": {
    width: "100%",
    borderWidth: 0,
    backgroundColor: "currentColor",
    height: "1px",
    marginTop: { base: "1.25rem", lg: "1.5rem" },
    marginBottom: { base: "1.25rem", lg: "1.5rem" },
  },
  // From: Heading.styles.ts. Panda css can't keep track if we make this another object, so copy is needed
  "& h1": { fontSize: "1.75rem", lineHeight: 1.24 },
  "& h2": { fontSize: "1.5rem", lineHeight: 1.24 },
  "& h3": { fontSize: "1.25rem", lineHeight: 1.5 },
  "& h4": { fontSize: "1rem", lineHeight: 1.5 },
  "& h5": { fontSize: "0.875rem", lineHeight: 1.5 },
  "& h6": { fontSize: "0.75rem", lineHeight: 1.5 },
});
