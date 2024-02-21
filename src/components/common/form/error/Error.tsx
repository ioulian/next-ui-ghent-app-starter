import { FC, memo } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";

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
    <div id={id} {...props} className={clsx(error, className)} role="alert">
      <VisuallyHidden>{t("error.prefix")}</VisuallyHidden>
      {children}
    </div>
  );
};

export default memo(Error);
