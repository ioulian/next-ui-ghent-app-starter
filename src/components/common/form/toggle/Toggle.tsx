"use client";

import { forwardRef, memo } from "react";

import {
  toggleContainer,
  toggleInput,
  toggleLabel,
} from "@/components/common/form/toggle/Toggle.styles";
import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { addClassNameToProps } from "@/styles/utils";

const Toggle = forwardRef<
  HTMLInputElement,
  { isError?: boolean } & Omit<InferComponentProps<"input">, "children">
>(({ isError, ...props }, ref) => {
  // We set aria-hidden to true, as we have another label for that element
  return (
    // FIXME: try and use a prop?
    <div className={cx(toggleContainer, "toggle")}>
      <input {...addClassNameToProps(props, toggleInput)} type="checkbox" ref={ref} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={props.id}
        className={cx(baseFormField({ isError }), toggleLabel)}
        aria-hidden="true"
      />
    </div>
  );
});

Toggle.displayName = "Toggle";

/**
 * Checkbox component styled as a toggle
 */
export default memo(Toggle);
