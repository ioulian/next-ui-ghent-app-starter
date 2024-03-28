import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { ArrayElement } from "@/types/helpers";
import { addClassNameToProps } from "@/styles/utils";

import { buttonGroup } from "./ButtonGroup.styles";

const ButtonGroup = forwardRef<
  HTMLDivElement,
  {
    /**
     * Will align right all the buttons
     */
    align?: ArrayElement<(typeof buttonGroup.variantMap)["align"]>;
  } & InferComponentProps<"div">
>(({ align = "start", ...props }, ref) => {
  return <div {...addClassNameToProps(props, buttonGroup({ align }).root)} ref={ref} />;
});

ButtonGroup.displayName = "ButtonGroup";

/**
 * Will render buttons as a group
 */
export default memo(ButtonGroup);
