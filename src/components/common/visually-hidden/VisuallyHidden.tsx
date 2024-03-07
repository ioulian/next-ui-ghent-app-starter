import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { visuallyHidden } from "./VisuallyHidden.styles";

const VisuallyHidden: FC<InferComponentProps<"span">> = ({ className, ...props }) => {
  return <span {...props} className={cx(visuallyHidden, className)} />;
};

/**
 * Will render a component only shown to screen readers
 */
export default memo(VisuallyHidden);
