import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";
import { formFieldError } from "@/components/common/form/form-field/FormField.styles.css";

export const label = style({
  fontWeight: 700,
  display: "block",
  padding: 0,
  selectors: {
    [`${formFieldError} &`]: {
      borderColor: vars.form.error.color,
    },
    [`${formFieldError} &:focus`]: {
      outlineColor: vars.form.error.color,
    },
  },
});

export const labelAsterisk = style({
  color: vars.form.asterisk.color,
});
