import { forwardRef, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/@types/component";

import { heading } from "./Heading.styles.css";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading = forwardRef<
  HTMLHeadingElement,
  {
    type?: HeadingType;
    size?: HeadingSize;
  } & InferComponentProps<"h1">
>(({ type = "h2", size = type, className, children, ...props }, ref) => {
  const Element = type;
  return (
    <Element {...props} className={clsx(heading[size], className)} ref={ref}>
      {children}
    </Element>
  );
});

if (process.env.NODE_ENV === "development") {
  Heading.displayName = "Heading";
}

export default memo(Heading);