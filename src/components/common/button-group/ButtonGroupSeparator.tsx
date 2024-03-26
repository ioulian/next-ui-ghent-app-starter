import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { buttonGroup } from "./ButtonGroup.styles";

const ButtonGroupSeparator: FC<InferComponentProps<"div">> = (props) => {
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      {...addClassNameToProps(props, buttonGroup().separator)}
    />
  );
};

/**
 * Will render buttons as a group
 */
export default memo(ButtonGroupSeparator);
