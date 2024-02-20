import { recipe } from "@vanilla-extract/recipes";
import { style, globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

import { spinner } from "../spinner/Spinner.styles.css";

export const fullWidth = style({ width: "100%" });

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    position: "relative",
    fontFamily: vars.font.body,
    fontWeight: 500,
    appearance: "none",
    cursor: "pointer",
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    border: `1px solid ${vars.color.brand}`,
    borderRadius: "4px",
    transition: `border-color ${vars.timing.fast}, background-color ${vars.timing.fast}, color ${vars.timing.fast}`,
    selectors: {
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    variant: {
      primary: {
        color: vars.color.white,
        backgroundColor: vars.color.brand,
        selectors: {
          "&:hover, &:focus": {
            backgroundColor: vars.color.brandDarker,
            borderColor: vars.color.brandDarker,
          },
        },
      },
      secondary: {
        color: vars.color.brand,
        backgroundColor: vars.color.white,
        selectors: {
          "&:hover, &:focus": {
            color: vars.color.white,
            backgroundColor: vars.color.brandDarker,
            borderColor: vars.color.brandDarker,
          },
        },
      },
      simple: { borderColor: "transparent" },
      link: {
        borderColor: "transparent",
        textDecoration: "underline",
        "&:hover, &:focus": {
          textDecoration: "none",
        },
      },
    },
    size: {
      small: { padding: "0.5rem 0.75rem", fontSize: "0.875rem", lineHeight: "1rem" },
      normal: { padding: "0.625rem 1.25rem" },
      large: { padding: "1.125rem 2rem" },
      base: { border: "none" },
    },
    isLoading: {
      true: {
        selectors: {
          "&:disabled": {
            cursor: "wait",
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "normal",
    isLoading: false,
  },
});

export const buttonContent = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: vars.timing.fast,
  opacity: 1,
  gap: "0.5rem",
});

globalStyle(`${button().split(" ")[0]} > ${spinner}`, {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: vars.timing.fast,
  pointerEvents: "none",
});

globalStyle(`${button({ isLoading: true }).split(" ")[3]} > ${spinner}`, {
  opacity: 1,
});

globalStyle(`${button({ isLoading: true }).split(" ")[3]} > ${buttonContent}`, {
  opacity: 0,
});

globalStyle(`${button().split(" ")[0]} > ${buttonContent} > svg`, {
  flexShrink: 0,
  width: "1.5rem",
  height: "1.5rem",
});

globalStyle(`${button({ size: "small" }).split(" ")[2]} > ${buttonContent} > svg`, {
  width: "1rem",
  height: "1rem",
});
