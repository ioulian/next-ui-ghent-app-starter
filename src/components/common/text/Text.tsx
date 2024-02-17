import { FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/@types/component";

import { text } from "./Text.styles.css";

const Text: FC<InferComponentProps<"div">> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx(text, className)}>
      {children}
    </div>
  );
};

export default memo(Text);
