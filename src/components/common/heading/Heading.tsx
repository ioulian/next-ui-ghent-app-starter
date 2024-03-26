import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

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
>(({ type = "h2", size = type, children, ...props }, ref) => {
  const Element = type;

  return (
    <Element {...addClassNameToProps(props, heading({ size }))} ref={ref}>
      {children}
    </Element>
  );
});

Heading.displayName = "Heading";

export default memo(Heading);
