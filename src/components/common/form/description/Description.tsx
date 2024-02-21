import { FC, memo } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { description } from "./Description.styles.css";

const Description: FC<{ id: string } & InferComponentProps<"div">> = ({
  id,
  children,
  className,
  ...props
}) => {
  const t = useTranslations("common.form");

  return (
    <div id={id} {...props} className={clsx(description, className)}>
      <VisuallyHidden>{t("description.prefix")}</VisuallyHidden>
      {children}
    </div>
  );
};

export default memo(Description);
