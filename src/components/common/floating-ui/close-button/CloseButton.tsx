import { FC, memo } from "react";
import iconX from "@tabler/icons/x.svg";

import { InferComponentProps } from "@/types/component";
import Button from "@/components/common/button/Button";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { cx } from "@/styled-system/css";
import { closeButton } from "@/components/common/floating-ui/close-button/CloseButton.styles";

const CloseButton: FC<InferComponentProps<typeof Button>> = ({ className, ...props }) => {
  return (
    <Button
      {...props}
      iconOnly
      iconBefore={<SvgSprite src={iconX} />}
      size="base"
      intent="simple"
      className={cx(closeButton, className)}
    />
  );
};

export default memo(CloseButton);
