import { FC, memo } from "react";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { description } from "./Description.styles";

const Description: FC<{ id: string } & InferComponentProps<"div">> = ({
  id, // Require ID
  children,
  ...props
}) => {
  const t = useTranslations("common.form");

  return (
    <div {...addClassNameToProps(props, description)} id={id}>
      <VisuallyHidden>{t("description.prefix")}</VisuallyHidden>
      {children}
    </div>
  );
};

/**
 * Description of the form field
 */
export default memo(Description);
