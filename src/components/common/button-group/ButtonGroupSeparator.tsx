import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { buttonGroup } from "./ButtonGroup.styles";

const ButtonGroupSeparator: FC<InferComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      {...props}
      className={cx(buttonGroup().separator, className)}
    />
  );
};

/**
 * Will render buttons as a group
 */
export default memo(ButtonGroupSeparator);
