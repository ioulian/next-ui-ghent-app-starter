import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { list } from "./List.styles";

const List: FC<InferComponentProps<"div">> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx(list, className)}>
      {children}
    </div>
  );
};

/**
 * List wrapper that will render children inline
 */
export default memo(List);
