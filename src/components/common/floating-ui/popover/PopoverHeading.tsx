"use client";

import { useId } from "@floating-ui/react";
import { HTMLProps, cloneElement, forwardRef, isValidElement, memo, useLayoutEffect } from "react";

import { usePopoverContext } from "./hooks";

const PopoverHeading = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => {
    const { setLabelId } = usePopoverContext();
    const id = useId();

    // Only sets `aria-labelledby` on the Popover root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
      setLabelId(id);
      return () => setLabelId(undefined);
    }, [id, setLabelId]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        id,
        ...props,
      });
    }

    return (
      <h2 {...props} ref={ref} id={id}>
        {children}
      </h2>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  PopoverHeading.displayName = "PopoverHeading";
}

export default memo(PopoverHeading);
