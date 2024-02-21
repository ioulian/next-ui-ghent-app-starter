import { forwardRef, memo, ReactNode } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { input, inputIconContainer } from "./Input.styles.css";

const Input = forwardRef<
  HTMLInputElement,
  { iconBefore?: ReactNode; iconAfter?: ReactNode } & InferComponentProps<"input">
>(({ iconBefore, iconAfter, className, ...props }, ref) => {
  const element = <input {...props} className={clsx(input, className)} ref={ref} />;

  if ((iconBefore || iconAfter) && !["checkbox", "radio"].includes(props.type ?? "")) {
    return (
      <div className={inputIconContainer}>
        {iconBefore}
        {element}
        {iconAfter}
      </div>
    );
  }
  return element;
});

if (process.env.NODE_ENV === "development") {
  Input.displayName = "Input";
}

export default memo(Input);
