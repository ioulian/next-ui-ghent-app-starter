import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { heading } from "./Heading.styles";

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
    <Element {...props} className={cx(heading({ size }), className)} ref={ref}>
      {children}
    </Element>
  );
});

if (process.env.NODE_ENV === "development") {
  Heading.displayName = "Heading";
}

export default memo(Heading);
