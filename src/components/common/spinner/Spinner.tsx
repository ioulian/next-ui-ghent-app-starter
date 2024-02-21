import { FC, memo } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import merge from "lodash/merge";

import { InferComponentProps } from "@/types/component";

import {
  backgroundColorVar,
  primaryColorVar,
  secondaryColorVar,
  spinner,
  fullWidth as fullWidthStyle,
  fullHeight as fullHeightStyle,
  spinnerElement,
  spinnerInner,
  spinnerLabel,
} from "./Spinner.styles.css";

const Spinner: FC<
  {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
  } & InferComponentProps<"div">
> = ({
  children,
  style,
  className,
  primaryColor = "currentColor",
  secondaryColor = "transparent",
  backgroundColor = "transparent",
  fullWidth,
  fullHeight,
  ...props
}) => (
  <span
    {...props}
    className={clsx(spinner, fullWidth && fullWidthStyle, fullHeight && fullHeightStyle, className)}
    style={merge(
      style ?? {},
      assignInlineVars({
        [backgroundColorVar]: backgroundColor,
      }),
    )}
  >
    <span className={spinnerInner}>
      <span
        className={spinnerElement}
        style={assignInlineVars({
          [primaryColorVar]: primaryColor,
          [secondaryColorVar]: secondaryColor,
        })}
      />
    </span>
    {children ? <span className={spinnerLabel}>{children}</span> : null}
  </span>
);

export default memo(Spinner);
