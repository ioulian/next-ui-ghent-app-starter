import { Children, FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { tagList } from "./TagList.styles";

const TagList: FC<InferComponentProps<"ul">> = ({ children, className, ...props }) => {
  return (
    <ul {...props} className={cx(tagList, className)}>
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
