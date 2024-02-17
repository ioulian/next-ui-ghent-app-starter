import { FC, memo } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import merge from "lodash/merge";

import { InferComponentProps } from "@/@types/component";

import {
  backgroundColorVar,
  primaryColorVar,
  secondaryColorVar,
  spinner,
  spinnerElement,
  spinnerInner,
  spinnerLabel,
} from "./Spinner.styles.css";

const Spinner: FC<
  {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    // TODO: find how to get the variant type
    variant?: "base" | "fullWidth" | "fullHeight" | "fullSize";
  } & InferComponentProps<"div">
> = ({
  children,
  style,
  className,
  variant = "base",
  primaryColor = "currentColor",
  secondaryColor = "transparent",
  backgroundColor = "transparent",
  ...props
}) => (
  <div
    {...props}
    className={clsx(spinner[variant], className)}
    style={merge(
      style ?? {},
      assignInlineVars({
        [backgroundColorVar]: backgroundColor,
      }),
    )}
  >
    <div className={spinnerInner}>
      <div
        className={spinnerElement}
        style={assignInlineVars({
          [primaryColorVar]: primaryColor,
          [secondaryColorVar]: secondaryColor,
        })}
      />
    </div>
    {children ? <span className={spinnerLabel}>{children}</span> : null}
  </div>
);

export default memo(Spinner);
