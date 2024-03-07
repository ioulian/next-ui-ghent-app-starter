import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { tag } from "./Tag.styles";

const Tag: FC<InferComponentProps<"span">> = ({ children, className, ...props }) => {
  return (
    <span {...props} className={cx(tag, className)}>
      {children}
    </span>
  );
};

/**
 * Tag component
 */
export default memo(Tag);
