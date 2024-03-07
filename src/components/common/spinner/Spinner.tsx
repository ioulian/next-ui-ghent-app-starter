import { FC, memo, useMemo } from "react";
import merge from "lodash/merge";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { ArrayElement } from "@/types/helpers";

import {
  backgroundColorVar,
  primaryColorVar,
  secondaryColorVar,
  spinner,
  spinnerElement,
  spinnerInner,
  spinnerLabel,
} from "./Spinner.styles";

const Spinner: FC<
  {
    /**
     * Main color of the spinner
     */
    primaryColor?: string;

    /**
     * Secondary color of the spinner, but is by default not visible
     */
    secondaryColor?: string;

    /**
     * Background color of the spinner, usefull when using a spinner inside a component as full size
     */
    backgroundColor?: string;

    /**
     * Size of the spinner
     */
    size?: ArrayElement<(typeof spinner.variantMap)["size"]>;
  } & InferComponentProps<"div">
> = ({
  children,
  style,
  className,
  primaryColor = "currentColor",
  secondaryColor = "transparent",
  backgroundColor = "transparent",
  size,
  ...props
}) => {
  const spinnerStyle = useMemo(
    () =>
      merge(style ?? {}, {
        [backgroundColorVar]: backgroundColor,
      }),
    [backgroundColor, style],
  );
  const spinnerElementStyle = useMemo(
    () => ({
      [primaryColorVar]: primaryColor,
      [secondaryColorVar]: secondaryColor,
    }),
    [primaryColor, secondaryColor],
  );

  return (
    <span {...props} className={cx(spinner({ size }), className)} style={spinnerStyle}>
      <span className={spinnerInner}>
        <span className={spinnerElement} style={spinnerElementStyle} />
      </span>
      {children ? <span className={spinnerLabel}>{children}</span> : null}
    </span>
  );
};

/**
 * Spinner component. You can provide an optional string to render beside the spinner.
 */
export default memo(Spinner);
