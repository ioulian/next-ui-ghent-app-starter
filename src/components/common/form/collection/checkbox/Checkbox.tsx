import { forwardRef, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import Label from "../../label/Label";
import { input } from "../../input/Input.styles.css";

import { checkboxContainer } from "./Checkbox.styles.css";

const Checkbox = forwardRef<
  HTMLInputElement,
  { inputValue: string } & InferComponentProps<"input">
>(
  (
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      name,
      inputValue,
      children,
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
          className={clsx(input, className)}
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

if (process.env.NODE_ENV === "development") {
  Checkbox.displayName = "Checkbox";
}

export default memo(Checkbox);
