"use client";

import { forwardRef, memo, ReactNode } from "react";

import { InferComponentProps } from "@/types/component";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { addClassNameToProps } from "@/styles/utils";

import { input, inputIconContainer } from "./Input.styles";

const Input = forwardRef<
  HTMLInputElement,
  {
    /**
     * Add a node before
     */
    iconBefore?: ReactNode;

    /**
     * Add a node after
     */
    iconAfter?: ReactNode;
    isError?: boolean;
  } & InferComponentProps<"input">
>(({ iconBefore, iconAfter, isError, ...props }, ref) => {
  const element = (
    <input {...addClassNameToProps(props, baseFormField({ isError }), input)} ref={ref} />
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

Input.displayName = "Input";

/**
 * Input field
 */
export default memo(Input);
