import { Children, FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { wrap } from "@/styled-system/patterns";
import { addClassNameToProps } from "@/styles/utils";

import { tagList } from "./TagList.styles";

const TagList: FC<InferComponentProps<"ul">> = ({ children, ...props }) => {
  return (
    <ul {...addClassNameToProps(props, wrap({ gap: "0.5rem" }), tagList)}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
};

/**
 * List of tags
 */
export default memo(TagList);
