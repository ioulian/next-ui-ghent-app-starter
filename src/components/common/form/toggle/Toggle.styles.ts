import { css } from "@/styled-system/css";

export const toggleInput = css({
  srOnly: true,

  "&:focus + label": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "primary.500",
  },
  "&:checked + label": {
    backgroundColor: "form.checkbox.checked.background",
    borderColor: "form.checkbox.checked.border",
    _before: {
      backgroundColor: "form.checkbox.checked.color",
      transform: "translateX(calc(2.5rem - 6px - 14px))",
    },
  },
});

export const toggleContainer = css({
  "& + *": {
    marginTop: "0.25rem",
  },
  "& ~ *": {
    width: "100%",
  },
});

export const toggleLabel = css({
  outlineOffset: "4px",
  width: "2.5rem",
  height: "1.25rem",
  borderRadius: "0.625rem",
  display: "block",
  position: "relative",
  backgroundColor: "form.input.background",
  transition: "background-color {durations.normal}, border-color {durations.normal}",
  "&::before": {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: "form.input.border",
    content: '""',
    top: "2px",
    left: "2px",
    position: "absolute",
    transition: "transform {durations.normal}, background-color {durations.normal}",
  },
});
