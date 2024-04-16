import { css, cva } from "@/styled-system/css";

export const toolbar = css({
  backgroundColor: "secondary.200",
  padding: "0.25rem",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "form.input.border",
  display: "flex",
  gap: "0.25rem",
});

export const toolbarSeparator = css({
  width: "1px",
  marginTop: "0.25rem",
  marginBottom: "0.25rem",
  backgroundColor: "form.input.border",
});

export const button = cva({
  base: {
    borderRadius: "4px",
    transition: "common",
    transitionDuration: "fast",
    colorPalette: "secondary",
    color: "body",
    padding: "0.25rem",
    _isHoverFocus: {
      backgroundColor: "colorPalette.400",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "& > svg": {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "primary.500",
        color: "white",
        _isHoverFocus: {
          backgroundColor: "primary.400",
        },
      },
    },
    isDropdownTrigger: {
      true: {
        padding: "0.25rem 0.5rem",
      },
    },
  },
});
