import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { list } from "./List.styles";

const List: FC<InferComponentProps<"div">> = ({ children, ...props }) => {
  return <div {...addClassNameToProps(props, list)}>{children}</div>;
};

/**
 * List wrapper that will render children inline
 */
export default memo(List);
