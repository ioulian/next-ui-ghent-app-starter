import { forwardRef, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import Label from "../../label/Label";
import { input } from "../../input/Input.styles.css";

import { radioContainer } from "./Radio.styles.css";

const Radio = forwardRef<HTMLInputElement, { inputValue: string } & InferComponentProps<"input">>(
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
      <div className={radioContainer}>
        <input
          {...props}
          className={clsx(input, className)}
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

export default memo(Radio);
