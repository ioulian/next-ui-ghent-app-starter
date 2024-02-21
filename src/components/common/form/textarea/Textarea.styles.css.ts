import { style } from "@vanilla-extract/css";

import { baseFormField } from "../form-field/FormField.styles.css";

export const textarea = style([
  baseFormField,
  {
    fontFamily: "inherit",
    lineHeight: "1.5rem",
    padding: "9px 17px",
    resize: "vertical",
    fontSize: "1rem",
    width: "100%",
    display: "block",
  },
]);
