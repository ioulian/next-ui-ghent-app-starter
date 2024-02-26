import { cva } from "@/styled-system/css";

export const button = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    position: "relative",
    fontFamily: "body",
    fontWeight: 500,
    appearance: "none",
    cursor: "pointer",
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "primary.500",
    borderRadius: "4px",
    transition: "common",
    transitionDuration: "fast",
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants: {
    intent: {
      primary: {
        color: "white",
        backgroundColor: "primary.500",
        _hover: {
          backgroundColor: "primary.600",
          borderColor: "primary.600",
        },
        _focus: {
          backgroundColor: "primary.600",
          borderColor: "primary.600",
        },
      },
      secondary: {
        color: "primary.500",
        backgroundColor: "white",
        _hover: {
          color: "white",
          backgroundColor: "primary.600",
          borderColor: "primary.600",
        },
        _focus: {
          color: "white",
          backgroundColor: "primary.600",
          borderColor: "primary.600",
        },
      },
      simple: { borderColor: "transparent" },
      link: {
        borderColor: "transparent",
        textDecoration: "underline",
        _hover: {
          textDecoration: "none",
        },
        _focus: {
          textDecoration: "none",
        },
      },
    },
    size: {
      small: { padding: "0.5rem 0.75rem", fontSize: "0.875rem", lineHeight: "1rem" },
      normal: { padding: "0.625rem 1.25rem" },
      large: { padding: "1.125rem 2rem" },
      base: { borderWidth: 0 },
    },
    isLoading: {
      true: {
        _disabled: {
          cursor: "wait",
        },
      },
    },
    fullWidth: {
      true: { width: "100%" },
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "normal",
    isLoading: false,
    fullWidth: false,
  },
});

export const buttonContent = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity",
    transitionDuration: "fast",
    opacity: 0,
    gap: "0.5rem",
  },
  variants: {
    isVisible: {
      true: {
        opacity: 1,
      },
    },
  },
});

export const spinner = cva({
  base: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity",
    transitionDuration: "fast",
    pointerEvents: "none",
  },
  variants: {
    isVisible: {
      true: {
        opacity: 1,
      },
    },
  },
});

export const svg = cva({
  base: {
    flexShrink: 0,
  },
  variants: {
    size: {
      normal: {
        width: "1.5rem",
        height: "1.5rem",
      },
      small: {
        width: "1rem",
        height: "1rem",
      },
    },
  },
});
