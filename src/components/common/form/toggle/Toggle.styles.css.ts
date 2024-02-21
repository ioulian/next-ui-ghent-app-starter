import { style } from "@vanilla-extract/css";

import { visuallyHidden } from "@/components/common/visually-hidden/VisuallyHidden.styles.css";
import {
  baseFormField,
  formFieldError,
  formFieldToggle,
} from "@/components/common/form/form-field/FormField.styles.css";
import { vars } from "@/styles/theme.css";

export const toggle = style({
  selectors: {
    [`${formFieldToggle} > &`]: {
      order: -1,
    },
  },
});
export const toggleInput = style([
  visuallyHidden,
  {
    selectors: {
      [`${formFieldError} &:focus`]: {
        outlineColor: vars.form.error.color,
      },
    },
  },
]);

export const toggleLabel = style([
  baseFormField,
  {
    outlineOffset: "4px",
    width: "2.5rem",
    height: "1.25rem",
    borderRadius: "0.625rem",
    display: "block",
    position: "relative",
    backgroundColor: vars.form.input.background,
    transition: `background-color ${vars.timing.normal}, border-color ${vars.timing.normal},`,
    selectors: {
      "&::before": {
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        backgroundColor: vars.form.input.border,
        content: "",
        top: "2px",
        left: "2px",
        position: "absolute",
        transition: `transform ${vars.timing.normal}, background-color ${vars.timing.normal},`,
      },
      [`${toggleInput}:focus + &`]: {
        outline: `2px solid ${vars.color.brand}`,
      },
      [`${formFieldError} ${toggleInput}:focus + &`]: {
        outlineColor: vars.form.error.color,
      },
      [`${toggleInput}:checked + &`]: {
        backgroundColor: vars.form.checkbox.checked.background,
        borderColor: vars.form.checkbox.checked.border,
      },
      [`${toggleInput}:checked + &::before`]: {
        backgroundColor: vars.form.checkbox.checked.color,
        transform: "translateX(calc(2.5rem - 6px - 14px))",
      },
    },
  },
]);
