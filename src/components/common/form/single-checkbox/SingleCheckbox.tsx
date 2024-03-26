"use client";

import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from "react";

import { InferComponentProps } from "@/types/component";
import { input } from "@/components/common/form/input/Input.styles";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { indeterminateCheckbox } from "@/components/common/form/single-checkbox/SingleCheckbox.styles";
import { addClassNameToProps } from "@/styles/utils";

const SingleCheckbox = forwardRef<
  HTMLInputElement,
  { isError?: boolean; indeterminate?: boolean } & Omit<InferComponentProps<"input">, "children">
>(({ isError, indeterminate, ...props }, ref) => {
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
      {...addClassNameToProps(
        props,
        baseFormField({ isError }),
        input,
        isIndeterminate && indeterminateCheckbox,
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
