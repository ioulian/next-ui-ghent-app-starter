import { FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { tag } from "./Tag.styles.css";

const Tag: FC<InferComponentProps<"span">> = ({ children, className, ...props }) => {
  return (
    <span {...props} className={clsx(tag, className)}>
      {children}
    </span>
  );
};

export default memo(Tag);
