import { sva } from "@/styled-system/css";

// We can also use "defineSlotRecipe" and enable staticCss in config to generate styles to be used directly in css modules.
export const button = sva({
  slots: ["root", "content", "spinner", "svg"],
  base: {
    root: {
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
      borderColor: "transparent",
      borderRadius: "4px",
      transition: "common",
      transitionDuration: "fast",
      _disabled: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&[aria-disabled='true']": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "opacity",
      transitionDuration: "fast",
      gap: "0.5rem",
    },
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0,
      transition: "opacity",
      transitionDuration: "fast",
      pointerEvents: "none",
    },
    svg: {
      flexShrink: 0,
      width: "1.5rem",
      height: "1.5rem",
    },
  },
  variants: {
    variant: {
      primary: {
        root: {
          colorPalette: "primary",
          color: "white",
          backgroundColor: "colorPalette.500",
          borderColor: "colorPalette.500",
          _isHoverFocus: {
            backgroundColor: "colorPalette.400",
            borderColor: "colorPalette.400",
          },
        },
      },
      negative: {
        root: {
          colorPalette: "negative",
          color: "white",
          backgroundColor: "colorPalette.500",
          borderColor: "colorPalette.500",
          _isHoverFocus: {
            backgroundColor: "colorPalette.400",
            borderColor: "colorPalette.400",
          },
        },
      },
      positive: {
        root: {
          colorPalette: "positive",
          color: "white",
          backgroundColor: "colorPalette.500",
          borderColor: "colorPalette.500",
          _isHoverFocus: {
            backgroundColor: "colorPalette.400",
            borderColor: "colorPalette.400",
          },
        },
      },
      secondary: {
        root: {
          colorPalette: "secondary",
          color: "body",
          backgroundColor: "colorPalette.500",
          borderColor: "colorPalette.500",
          _isHoverFocus: {
            backgroundColor: "colorPalette.400",
            borderColor: "colorPalette.400",
          },
        },
      },
      outline: {
        root: {
          colorPalette: "secondary",
          color: "body",
          backgroundColor: "transparent",
          borderColor: "colorPalette.500",
          _isHoverFocus: {
            backgroundColor: "colorPalette.400",
          },
        },
      },
      ghost: {
        root: {
          colorPalette: "secondary",
          color: "body",
          borderColor: "transparent",
          _isHoverFocus: {
            backgroundColor: "colorPalette.400",
          },
        },
      },
      simple: { root: { borderColor: "transparent" } },
      //link: {
      //  root: {
      //    borderColor: "transparent",
      //    textDecoration: "underline",
      //    _isHoverFocus: {
      //      textDecoration: "none",
      //    },
      //  },
      //},
    },
    size: {
      small: {
        root: { padding: "0.5rem 0.75rem", fontSize: "0.875rem", lineHeight: "1rem" },
        svg: {
          width: "1rem",
          height: "1rem",
        },
      },
      normal: { root: { padding: "0.625rem 1.25rem" } },
      large: { root: { padding: "1.125rem 2rem" } },
      base: { root: { borderWidth: 0 } },
    },
    isLoading: {
      true: {
        root: {
          cursor: "wait",
        },
        content: {
          opacity: 0,
        },
        spinner: {
          opacity: 1,
        },
      },
    },
    fullWidth: {
      true: { root: { width: "100%" } },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "normal",
    isLoading: false,
    fullWidth: false,
  },
});
