import { FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { list } from "./List.styles.css";

const List: FC<InferComponentProps<"div">> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx(list, className)}>
      {children}
    </div>
  );
};

export default memo(List);
