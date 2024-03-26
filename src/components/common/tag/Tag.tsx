import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { tag } from "./Tag.styles";

const Tag: FC<InferComponentProps<"span">> = (props) => {
  return <span {...addClassNameToProps(props, tag)} />;
};

/**
 * Tag component
 */
export default memo(Tag);
