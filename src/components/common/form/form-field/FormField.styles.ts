import { css, cva } from "@/styled-system/css";

export const formField = css({
  borderWidth: 0,
  margin: 0,
  padding: 0,
  _notLastChild: {
    marginBottom: "1.25rem",
  },
  "& > label, & > legend": {
    marginBottom: "0.5rem",
  },
});

export const formFieldToggle = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  "& > label": {
    marginBottom: "0!",
    marginLeft: "0.5rem",
  },
  "& > input": {
    order: -1,
  },
  "& > .toggle": {
    order: -1,
  },
  "& input + *": {
    marginTop: "0.25rem",
  },
  "& input ~ *": {
    width: "100%",
  },
});

export const baseFormField = cva({
  base: {
    color: "form.input.color",
    backgroundColor: "form.input.background",
    borderRadius: "normal",
    outlineColor: "form.outline",
    boxShadow: "input",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "form.input.border",
    margin: 0,
    "& + *:not(button, label)": {
      marginTop: "0.25rem",
    },
  },
  variants: {
    isError: {
      true: {
        borderColor: "form.error",
        _focus: {
          outlineColor: "form.error",
        },
      },
    },
  },
});
