import { ReactNode, forwardRef, memo } from "react";
import iconVariantNormal from "@tabler/icons/info-circle.svg";
import iconVariantDanger from "@tabler/icons/alert-circle.svg";
import iconVariantSuccess from "@tabler/icons/circle-check.svg";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";
import { ArrayElement } from "@/types/helpers";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";

import { alert } from "./Alert.styles";

const ICON_MAP: Record<
  ArrayElement<(typeof alert.variantMap)["variant"]>,
  { id: string; viewBox: string }
> = {
  normal: iconVariantNormal,
  info: iconVariantNormal,
  danger: iconVariantDanger,
  success: iconVariantSuccess,
};

const Alert = forwardRef<
  HTMLDivElement,
  {
    /**
     * Icon to show. Set to `false` for no icon. If nothing is passed, default icons are shown.
     */
    icon?: ReactNode | false;

    /**
     * Variant of the button
     */
    variant?: ArrayElement<(typeof alert.variantMap)["variant"]>;
  } & InferComponentProps<"div">
>(({ children, variant = "normal", icon, ...props }, ref) => {
  const classes = alert({ variant });
  const defaultIcon = ICON_MAP[variant];

  return (
    <div {...addClassNameToProps(props, classes.root)} ref={ref} role="alert">
      {icon !== false ? (
        <div className={classes.icon}>{icon ?? <SvgSprite src={defaultIcon} aria-hidden />}</div>
      ) : null}
      <div className={classes.content}>{children}</div>
    </div>
  );
});

Alert.displayName = "Alert";

/**
 * Alert component, with different states
 */
export default memo(Alert);
