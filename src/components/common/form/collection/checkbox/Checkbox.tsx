"use client";

import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";

import Label from "../../label/Label";
import SingleCheckbox from "../../single-checkbox/SingleCheckbox";

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
      ...props
    },
    ref,
  ) => {
    const linkedId = `${name}-${inputValue}`;

    return (
      <div className={checkboxContainer}>
        <SingleCheckbox {...props} id={linkedId} name={name} ref={ref} value={inputValue} />
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
