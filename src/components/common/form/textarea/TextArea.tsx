import { forwardRef, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { textarea } from "./Textarea.styles.css";

const TextArea = forwardRef<HTMLTextAreaElement, InferComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea cols={40} rows={5} {...props} className={clsx(textarea, className)} ref={ref} />
    );
  },
);

if (process.env.NODE_ENV === "development") {
  TextArea.displayName = "TextArea";
}

export default memo(TextArea);
