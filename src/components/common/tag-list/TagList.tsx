import { Children, FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { tagList } from "./TagList.styles.css";

const TagList: FC<InferComponentProps<"ul">> = ({ children, className, ...props }) => {
  return (
    <ul {...props} className={clsx(tagList, className)}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
};

export default memo(TagList);
