import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

import { label } from "../label/Label.styles.css";
import { error } from "../error/Error.styles.css";
import { description } from "../description/Description.styles.css";

export const formField = style({
  border: 0,
  margin: 0,
  padding: 0,
  selectors: {
    "&:not(:last-child)": {
      marginBottom: "1.25rem",
    },
  },
});

globalStyle(`${formField} ${label}`, {
  marginBottom: "0.5rem",
});

export const formFieldToggle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "0.5rem",
});

globalStyle(`${formFieldToggle} > ${label}`, {
  marginBottom: 0,
});

globalStyle(`${formFieldToggle} > ${description}, ${formFieldToggle} > ${error}`, {
  width: "100%",
});

export const formFieldError = style({});

//export const StyledFormField = styled.div<{
//  $error?: boolean;
//  $isToggle?: boolean;
//}>`
//
//  ${({ $error }) =>
//    $error &&
//    css`
//
//      ${StyledReactSelect} {
//        .react-select {
//          &__control {
//            border-color: ${({ theme }) => theme.form.error.color};
//          }
//        }
//      }
//    `}
//`;

export const baseFormField = style({
  color: vars.form.input.color,
  backgroundColor: vars.form.input.background,
  borderRadius: vars.borderRadius.normal,
  outlineColor: vars.form.outline.color,
  boxShadow: vars.form.input.shadow,
  border: `1px solid ${vars.form.input.border}`,
  margin: 0,
  selectors: {
    [`${formFieldError} &`]: {
      borderColor: vars.form.error.color,
    },
    [`${formFieldError} &:focus`]: {
      outlineColor: vars.form.error.color,
    },
  },
});

globalStyle(`${baseFormField} + ${description}, ${baseFormField} + ${error}`, {
  marginTop: "0.5rem",
});
