"use client";

import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";

import Label from "../../label/Label";
import { input } from "../../input/Input.styles";
import { checkboxContainer } from "../checkbox/Checkbox.styles";

import { radioContainer } from "./Radio.styles";

const Radio = forwardRef<
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
      <div className={cx(checkboxContainer, radioContainer)}>
        <input
          {...props}
          className={cx(baseFormField({ isError }), input, className)}
          name={name}
          type="radio"
          id={linkedId}
          ref={ref}
          value={inputValue}
        />
        <Label htmlFor={linkedId}>{children}</Label>
      </div>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Radio.displayName = "Radio";
}

/**
 * Radio input field
 */
export default memo(Radio);
