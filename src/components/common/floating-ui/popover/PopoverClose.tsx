"use client";

import { HTMLProps, cloneElement, forwardRef, isValidElement, memo, useCallback } from "react";

import { usePopoverContext } from "./hooks";

const PopoverClose = forwardRef<HTMLButtonElement, HTMLProps<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    const state = usePopoverContext();
    const onClick = useCallback(() => {
      state.setOpen(false);
    }, [state]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        onClick,
        ...props,
      });
    }

    return (
      <button onClick={onClick} {...props} type="button" ref={ref}>
        {children}
      </button>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  PopoverClose.displayName = "PopoverClose";
}

export default memo(PopoverClose);
