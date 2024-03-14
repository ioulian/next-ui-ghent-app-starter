"use client";

import { HTMLProps, cloneElement, forwardRef, isValidElement, memo } from "react";

import { WithTypeAheadKey } from "./Dropdown";

const DropdownTrigger = forwardRef<
  HTMLButtonElement,
  WithTypeAheadKey & HTMLProps<HTMLButtonElement>
  // We need to remove these props as the may not be passed to the elements
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ children, typeaheadKey, disabled, ...props }, ref) => {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ref,
      ...props,
    });
  }

  return (
    <button ref={ref} {...props} type="button">
      {children}
    </button>
  );
});

if (process.env.NODE_ENV === "development") {
  DropdownTrigger.displayName = "DropdownTrigger";
}

export default memo(DropdownTrigger);
