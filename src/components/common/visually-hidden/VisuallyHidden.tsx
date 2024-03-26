import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { visuallyHidden } from "./VisuallyHidden.styles";

const VisuallyHidden: FC<InferComponentProps<"span">> = (props) => {
  return <span {...addClassNameToProps(props, visuallyHidden)} />;
};

/**
 * Will render a component only shown to screen readers
 */
export default memo(VisuallyHidden);
