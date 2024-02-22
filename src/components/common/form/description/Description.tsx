import { FC, memo } from "react";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { description } from "./Description.styles";

const Description: FC<{ id: string } & InferComponentProps<"div">> = ({
  id,
  children,
  className,
  ...props
}) => {
  const t = useTranslations("common.form");

  return (
    <div id={id} {...props} className={cx(description, className)}>
      <VisuallyHidden>{t("description.prefix")}</VisuallyHidden>
      {children}
    </div>
  );
};

export default memo(Description);
