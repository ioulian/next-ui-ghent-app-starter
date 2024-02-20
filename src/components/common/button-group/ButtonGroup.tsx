import { FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/@types/component";

import { buttonGroup, alignRight as alignRightStyle } from "./ButtonGroup.styles.css";

const ButtonGroup: FC<{ alignRight?: boolean } & InferComponentProps<"div">> = ({
  children,
  className,
  alignRight,
  ...props
}) => {
  return (
    <div {...props} className={clsx(buttonGroup, alignRight && alignRightStyle, className)}>
      {children}
    </div>
  );
};

export default memo(ButtonGroup);
