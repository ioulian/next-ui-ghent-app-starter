import { FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { visuallyHidden } from "./VisuallyHidden.styles.css";

const VisuallyHidden: FC<InferComponentProps<"span">> = ({ className, ...props }) => {
  return <span {...props} className={clsx(visuallyHidden, className)} />;
};

export default memo(VisuallyHidden);
