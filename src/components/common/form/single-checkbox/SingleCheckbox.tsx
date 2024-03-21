"use client";

import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from "react";

import { InferComponentProps } from "@/types/component";
import { input } from "@/components/common/form/input/Input.styles";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { cx } from "@/styled-system/css";
import { indeterminateCheckbox } from "@/components/common/form/single-checkbox/SingleCheckbox.styles";

const SingleCheckbox = forwardRef<
  HTMLInputElement,
  { isError?: boolean; indeterminate?: boolean } & Omit<InferComponentProps<"input">, "children">
>(({ className, isError, indeterminate, ...props }, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  const isIndeterminate = !props.checked && !!indeterminate;
  useEffect(() => {
    if (innerRef?.current) {
      innerRef.current.indeterminate = isIndeterminate;
    }
  }, [innerRef, isIndeterminate]);

  return (
    <input
      {...props}
      className={cx(
        baseFormField({ isError }),
        input,
        isIndeterminate && indeterminateCheckbox,
        className,
      )}
      type="checkbox"
      ref={innerRef}
    />
  );
});

SingleCheckbox.displayName = "SingleCheckbox";

/**
 * Single checkbox component, use this when the value should be a boolean (instead of an array/object).
 */
export default memo(SingleCheckbox);
