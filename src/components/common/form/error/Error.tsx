import { FC, memo } from "react";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { error } from "./Error.styles";

const Error: FC<{ id: string } & InferComponentProps<"div">> = ({
  id,
  children,
  className,
  ...props
}) => {
  const t = useTranslations("common.form");

  return (
    <div id={id} {...props} className={cx(error, className)} role="alert">
      <VisuallyHidden>{t("error.prefix")}</VisuallyHidden>
      {children}
    </div>
  );
};

export default memo(Error);
