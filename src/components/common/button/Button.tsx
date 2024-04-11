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
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { ArrayElement } from "@/types/helpers";
import { addClassNameToProps } from "@/styles/utils";

import Spinner from "../spinner/Spinner";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

import { button } from "./Button.styles";

type Props = {
  /**
   * Variant of the button
   */
  variant?: ArrayElement<(typeof button.variantMap)["variant"]>;

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
} & InferComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant,
      size,
      fullWidth,
      iconOnly,
      iconBefore,
      iconAfter,
      isLoading = false,
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const t = useTranslations("common.button");
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

    const classes = button({ variant, size, isLoading, fullWidth });

    return (
      <button
        ref={ref}
        type="button"
        {...addClassNameToProps(props, classes.root)}
        disabled={disabled}
        aria-disabled={isLoading || disabled}
        onClick={onClick ? newOnClick : undefined}
        {...props}
      >
        <span className={classes.content}>
          {isValidElement<Record<string, unknown>>(iconBefore) &&
            cloneElement(iconBefore, {
              "aria-hidden": "true",
              className: classes.svg,
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
              className: classes.svg,
            })}
        </span>
        <Spinner
          className={classes.spinner}
          aria-live={isLoading ? "assertive" : "off"}
          aria-hidden={!isLoading}
          aria-label={isLoading ? t("spinner.aria-label") : ""}
        />
      </button>
    );
  },
);

Button.displayName = "Button";

/**
 * Generic button component
 */
export default memo(Button);
