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

export default memo(List);
