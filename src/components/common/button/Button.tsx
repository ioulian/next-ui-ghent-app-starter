"use client";

import {
  ReactNode,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  isValidElement,
  cloneElement,
  memo,
} from "react";
import { useCallback } from "react";
import { PolyForwardMemoComponent, PolyRefFunction } from "react-polymorphed";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { ArrayElement } from "@/types/helpers";

import Spinner from "../spinner/Spinner";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

import { button, buttonContent, spinner, svg } from "./Button.styles";

type Props = {
  /**
   * Variant of the button
   */
  intent?: ArrayElement<(typeof button.variantMap)["intent"]>;

  /**
   * Size of the button
   */
  size?: ArrayElement<(typeof button.variantMap)["size"]>;

  /**
   * Should button be rendered full width
   */
  fullWidth?: boolean;

  /**
   * Show progress bar
   */
  isLoading?: boolean;

  /**
   * Add an icon before
   */
  iconBefore?: ReactNode;

  /**
   * Add an icon after
   */
  iconAfter?: ReactNode;

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
      intent,
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
        className={cx(button({ intent, size, isLoading, fullWidth }), className)}
        disabled={disabled || isLoading}
        onClick={onClick ? newOnClick : undefined}
      >
        <span className={buttonContent({ isVisible: !isLoading })}>
          {isValidElement<Record<string, unknown>>(iconBefore) &&
            cloneElement(iconBefore, {
              "aria-hidden": "true",
              className: svg({ size: size === "small" ? "small" : "normal" }),
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
              className: svg({ size: size === "small" ? "small" : "normal" }),
            })}
        </span>
        <Spinner className={spinner({ isVisible: isLoading })} />
      </Element>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
}

/**
 * Generic button component
 */
export default memo(Button) as PolyForwardMemoComponent<"button", Props>;
