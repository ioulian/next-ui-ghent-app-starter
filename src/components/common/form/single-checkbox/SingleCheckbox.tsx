import clsx from "clsx";
import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { input } from "@/components/common/form/input/Input.styles.css";

const SingleCheckbox = forwardRef<HTMLInputElement, Omit<InferComponentProps<"input">, "children">>(
  ({ className, ...props }, ref) => {
    return <input {...props} className={clsx(input, className)} type="checkbox" ref={ref} />;
  },
);

if (process.env.NODE_ENV === "development") {
  SingleCheckbox.displayName = "SingleCheckbox";
}

export default memo(SingleCheckbox);
