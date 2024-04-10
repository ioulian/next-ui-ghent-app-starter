import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { addClassNameToProps } from "@/styles/utils";

import { textArea } from "./TextArea.styles";

const TextArea = forwardRef<
  HTMLTextAreaElement,
  { isError?: boolean } & InferComponentProps<"textarea">
>(({ isError, ...props }, ref) => {
  return (
    <textarea
      cols={40}
      rows={5}
      {...addClassNameToProps(props, baseFormField({ isError }), textArea)}
      ref={ref}
    />
  );
});

TextArea.displayName = "TextArea";

/**
 * Text component
 */
export default memo(TextArea);
