import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { heading } from "./Heading.styles";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading = forwardRef<
  HTMLHeadingElement,
  {
    /**
     * Tag of the element
     */
    type?: HeadingType;

    /**
     * (CSS) size of the text. By default it will take the tag size, but sometimes you will need h2 rendered as h1...
     */
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
