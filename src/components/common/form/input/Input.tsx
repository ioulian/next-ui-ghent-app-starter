"use client";

import { forwardRef, memo, ReactNode } from "react";

import { InferComponentProps } from "@/types/component";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { cx } from "@/styled-system/css";

import { input, inputIconContainer } from "./Input.styles";

const Input = forwardRef<
  HTMLInputElement,
  {
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    isError?: boolean;
  } & InferComponentProps<"input">
>(({ iconBefore, iconAfter, className, isError, ...props }, ref) => {
  const element = (
    <input {...props} className={cx(baseFormField({ isError }), input, className)} ref={ref} />
  );

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
