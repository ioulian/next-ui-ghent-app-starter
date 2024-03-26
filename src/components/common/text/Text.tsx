import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { text } from "./Text.styles";

const Text: FC<InferComponentProps<"div">> = (props) => {
  return <div {...addClassNameToProps(props, text)} />;
};

/**
 * Text component will apply styles to different components inside. Is useful when using WYSIWYG content.
 */
export default memo(Text);
