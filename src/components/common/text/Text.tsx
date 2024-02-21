import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { text } from "./Text.styles";

const Text: FC<InferComponentProps<"div">> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cx(text, className)}>
      {children}
    </div>
  );
};

export default memo(Text);
