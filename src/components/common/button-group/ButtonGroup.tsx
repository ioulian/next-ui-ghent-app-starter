import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { ArrayElement } from "@/types/helpers";
import { addClassNameToProps } from "@/styles/utils";

import { buttonGroup } from "./ButtonGroup.styles";

const ButtonGroup: FC<
  {
    /**
     * Will align right all the buttons
     */
    align?: ArrayElement<(typeof buttonGroup.variantMap)["align"]>;
  } & InferComponentProps<"div">
> = ({ children, align = "start", ...props }) => {
  return <div {...addClassNameToProps(props, buttonGroup({ align }).root)}>{children}</div>;
};

/**
 * Will render buttons as a group
 */
export default memo(ButtonGroup);
