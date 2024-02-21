import { forwardRef, memo } from "react";
import clsx from "clsx";

import {
  toggle,
  toggleInput,
  toggleLabel,
} from "@/components/common/form/toggle/Toggle.styles.css";
import { InferComponentProps } from "@/types/component";

const Toggle = forwardRef<HTMLInputElement, Omit<InferComponentProps<"input">, "children">>(
  ({ className, ...props }, ref) => {
    // We set aria-hidden to true, as we have another label for that element
    return (
      <div className={toggle}>
        <input {...props} className={clsx(toggleInput, className)} type="checkbox" ref={ref} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={props.id} className={toggleLabel} aria-hidden="true" />
      </div>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Toggle.displayName = "Toggle";
}

export default memo(Toggle);
