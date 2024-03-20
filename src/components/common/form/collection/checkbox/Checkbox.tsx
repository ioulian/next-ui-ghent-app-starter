"use client";

import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { cx } from "@/styled-system/css";

import Label from "../../label/Label";
import { input } from "../../input/Input.styles";

import { checkboxContainer } from "./Checkbox.styles";

const Checkbox = forwardRef<
  HTMLInputElement,
  { inputValue: string; isError?: boolean } & InferComponentProps<"input">
>(
  (
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      name,
      inputValue,
      children,
      isError,
      className,
      ...props
    },
    ref,
  ) => {
    const linkedId = `${name}-${inputValue}`;

    return (
      <div className={checkboxContainer}>
        <input
          {...props}
          className={cx(baseFormField({ isError }), input, className)}
          name={name}
          type="checkbox"
          id={linkedId}
          ref={ref}
          value={inputValue}
        />
        <Label htmlFor={linkedId}>{children}</Label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

/**
 * Checkbox field
 */
export default memo(Checkbox);
