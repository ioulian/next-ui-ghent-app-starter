import {
  ReactNode,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  isValidElement,
  cloneElement,
  memo,
} from "react";
import { useCallback } from "react";
import clsx from "clsx";
import { PolyForwardMemoComponent, PolyRefFunction } from "react-polymorphed";

import { InferComponentProps } from "@/types/component";
import { ExtractVariants } from "@/@types/styles";

import Spinner from "../spinner/Spinner";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

import { button, buttonContent, fullWidth as fullWidthStyle } from "./Button.styles.css";

type Props = {
  /**
   * Variant of the button
   */
  variant?: ExtractVariants<typeof button>["variant"];

  /**
   * Size of the button
   */
  size?: ExtractVariants<typeof button>["size"];

  /**
   * Should button be rendered full width
   */
  fullWidth?: boolean;

  /**
   * Add an icon before
   */
  iconBefore?: ReactNode;

  /**
   * Add an icon after
   */
  iconAfter?: ReactNode;

  /**
   * Show progress bar
   */
  isLoading?: boolean;

  /**
   * Will hide children and show icons only
   */
  iconOnly?: boolean;

  /**
   * Should the element be able to be clicked on
   */
  disabled?: boolean;
} & InferComponentProps<"button" | "a">;

const polyRef = forwardRef as PolyRefFunction;

const Button = polyRef<"button" | "a", Props>(
  (
    {
      as: Element = "button",
      variant,
      size,
      fullWidth,
      iconOnly,
      iconBefore,
      iconAfter,
      isLoading = false,
      disabled = false,
      onClick,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const newOnClick = useCallback(
      (
        e: ReactMouseEvent<HTMLButtonElement, MouseEvent> &
          ReactMouseEvent<HTMLAnchorElement, MouseEvent>,
      ) => {
        if (!isLoading && !disabled) {
          onClick?.(e);
        }
      },
      [onClick, isLoading, disabled],
    );

    return (
      <Element
        ref={ref}
        type={!Element || Element === "button" ? props.type ?? "button" : undefined}
        {...props}
        className={clsx(
          button({ variant, size, isLoading }),
          fullWidth && fullWidthStyle,
          className,
        )}
        disabled={disabled || isLoading}
        onClick={onClick ? newOnClick : undefined}
      >
        <span className={buttonContent}>
          {isValidElement<Record<string, unknown>>(iconBefore) &&
            cloneElement(iconBefore, {
              "aria-hidden": "true",
            })}
          {children ? (
            iconOnly ? (
              <VisuallyHidden>{children}</VisuallyHidden>
            ) : (
              <span>{children}</span>
            )
          ) : null}
          {isValidElement<Record<string, unknown>>(iconAfter) &&
            cloneElement(iconAfter, {
              "aria-hidden": "true",
            })}
        </span>
        <Spinner />
      </Element>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
}

export default memo(Button) as PolyForwardMemoComponent<"button", Props>;
