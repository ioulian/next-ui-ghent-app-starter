import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { cx } from "@/styled-system/css";

import { textarea } from "./Textarea.styles";

const TextArea = forwardRef<
  HTMLTextAreaElement,
  { isError?: boolean } & InferComponentProps<"textarea">
>(({ className, isError, ...props }, ref) => {
  return (
    <textarea
      cols={40}
      rows={5}
      {...props}
      className={cx(baseFormField({ isError }), textarea, className)}
      ref={ref}
    />
  );
});

if (process.env.NODE_ENV === "development") {
  TextArea.displayName = "TextArea";
}

export default memo(TextArea);
