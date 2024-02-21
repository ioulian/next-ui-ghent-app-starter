import { forwardRef, memo } from "react";
import clsx from "clsx";

import { toggleInput, toggleLabel } from "@/components/common/form/toggle/Toggle.styles";
import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";

const Toggle = forwardRef<
  HTMLInputElement,
  { isError?: boolean } & Omit<InferComponentProps<"input">, "children">
>(({ className, isError, ...props }, ref) => {
  // We set aria-hidden to true, as we have another label for that element
  return (
    // FIXME: try and use a prop?
    <div className="toggle">
      <input {...props} className={clsx(toggleInput, className)} type="checkbox" ref={ref} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={props.id}
        className={cx(baseFormField({ isError }), toggleLabel)}
        aria-hidden="true"
      />
    </div>
  );
});

if (process.env.NODE_ENV === "development") {
  Toggle.displayName = "Toggle";
}

export default memo(Toggle);
