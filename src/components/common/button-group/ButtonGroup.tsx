import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { buttonGroup, alignRight as alignRightStyle } from "./ButtonGroup.styles";

const ButtonGroup: FC<{ alignRight?: boolean } & InferComponentProps<"div">> = ({
  children,
  className,
  alignRight,
  ...props
}) => {
  return (
    <div {...props} className={cx(buttonGroup, alignRight && alignRightStyle, className)}>
      {children}
    </div>
  );
};

export default memo(ButtonGroup);
