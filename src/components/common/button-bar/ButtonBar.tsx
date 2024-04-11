import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { buttonBar } from "./ButtonBar.styles";

const ButtonBar = forwardRef<HTMLDivElement, InferComponentProps<"div">>(({ ...props }, ref) => {
  return <div {...addClassNameToProps(props, buttonBar)} ref={ref} />;
});

ButtonBar.displayName = "buttonBar";

/**
 * Will render buttons as a bar
 */
export default memo(ButtonBar);
