import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { ArrayElement } from "@/types/helpers";

import { buttonGroup } from "./ButtonGroup.styles";

const ButtonGroup: FC<
  {
    /**
     * Will align right all the buttons
     */
    align?: ArrayElement<(typeof buttonGroup.variantMap)["align"]>;
  } & InferComponentProps<"div">
> = ({ children, className, align, ...props }) => {
  return (
    <div {...props} className={cx(buttonGroup({ align }), className)}>
      {children}
    </div>
  );
};

/**
 * Will render buttons as a group
 */
export default memo(ButtonGroup);
