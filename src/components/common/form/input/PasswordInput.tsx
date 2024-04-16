"use client";

import { forwardRef, memo, useCallback, useState } from "react";
import passwordShowIcon from "@tabler/icons/outline/eye.svg";
import passwordHideIcon from "@tabler/icons/outline/eye-off.svg";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";

import SvgSprite from "../../svg-sprite/SvgSprite";
import Button from "../../button/Button";

import Input from "./Input";

const PasswordInput = forwardRef<HTMLInputElement, InferComponentProps<"input">>((props, ref) => {
  const t = useTranslations("common.form");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onClickCallback = useCallback(() => {
    setShowPassword((newShowPassword) => !newShowPassword);
  }, []);

  return (
    <Input
      ref={ref}
      {...props}
      type={showPassword ? "text" : "password"}
      iconAfter={
        <Button
          iconBefore={<SvgSprite src={showPassword ? passwordHideIcon : passwordShowIcon} />}
          iconOnly
          size="base"
          variant="simple"
          onClick={onClickCallback}
        >
          {t(`passwordInput.${showPassword ? "revealPassword" : "hidePassword"}`)}
        </Button>
      }
    />
  );
});

PasswordInput.displayName = "PasswordInput";

/**
 * Base input field but with some logic so show/hide password
 */
export default memo(PasswordInput);
