"use client";

import { ReactNode, forwardRef, isValidElement, cloneElement, memo } from "react";
import { PolyForwardMemoComponent, PolyRefFunction } from "react-polymorphed";

import { InferComponentProps } from "@/types/component";
import { ArrayElement } from "@/types/helpers";
import { addClassNameToProps } from "@/styles/utils";

import VisuallyHidden from "../visually-hidden/VisuallyHidden";
import { button } from "../button/Button.styles";

import { linkButton } from "./LinkButton.styles";

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
} & InferComponentProps<"a">;

const polyRef = forwardRef as PolyRefFunction;

const LinkButton = polyRef<"a", Props>(
  (
    {
      as: Element = "a",
      variant,
      size,
      fullWidth,
      iconOnly,
      iconBefore,
      iconAfter,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = button({ variant, size, fullWidth });

    return (
      <Element ref={ref} {...addClassNameToProps(props, classes.root, linkButton)}>
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
      </Element>
    );
  },
);

LinkButton.displayName = "LinkButton";

/**
 * LinkButton component
 */
export default memo(LinkButton) as PolyForwardMemoComponent<"a", Props>;
