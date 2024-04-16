import { FC, memo } from "react";
import iconX from "@tabler/icons/outline/x.svg";

import { InferComponentProps } from "@/types/component";
import Button from "@/components/common/button/Button";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { closeButton } from "@/components/common/floating-ui/close-button/CloseButton.styles";
import { addClassNameToProps } from "@/styles/utils";

const CloseButton: FC<InferComponentProps<typeof Button>> = (props) => {
  return (
    <Button
      {...addClassNameToProps(props, closeButton)}
      iconOnly
      iconBefore={<SvgSprite src={iconX} />}
      size="base"
      variant="simple"
    />
  );
};

/**
 * Close button to be used inside <Floater> used by floating-ui
 */
export default memo(CloseButton);
