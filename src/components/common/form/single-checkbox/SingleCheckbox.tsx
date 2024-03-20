"use client";

import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { input } from "@/components/common/form/input/Input.styles";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { cx } from "@/styled-system/css";

const SingleCheckbox = forwardRef<
  HTMLInputElement,
  { isError?: boolean } & Omit<InferComponentProps<"input">, "children">
>(({ className, isError, ...props }, ref) => {
  return (
    <input
      {...props}
      className={cx(baseFormField({ isError }), input, className)}
      type="checkbox"
      ref={ref}
    />
  );
});

SingleCheckbox.displayName = "SingleCheckbox";

/**
 * Single checkbox component, use this when the value should be a boolean (instead of an array/object).
 */
export default memo(SingleCheckbox);
