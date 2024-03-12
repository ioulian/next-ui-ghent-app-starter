import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";
import { stack } from "@/styled-system/patterns";

import { buttonGroup } from "./ButtonGroup.styles";

const ButtonGroup: FC<
  {
    /**
     * Will align right all the buttons
     */
    align?: "end" | "start";
  } & InferComponentProps<"div">
> = ({ children, className, align = "start", ...props }) => {
  return (
    <div
      {...props}
      className={cx(
        stack({ gap: "0.75rem", justify: align, align: "center", direction: "row" }),
        buttonGroup,
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * Will render buttons as a group
 */
export default memo(ButtonGroup);
