import { FC, memo } from "react";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";
import { WithRequired } from "@/types/helpers";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { error } from "./Error.styles";

const Error: FC<WithRequired<InferComponentProps<"div">, "id">> = ({ id, children, ...props }) => {
  const t = useTranslations("common.form");

  return (
    <div {...addClassNameToProps(props, error)} id={id} role="alert">
      <VisuallyHidden>{t("error.prefix")}</VisuallyHidden>
      {children}
    </div>
  );
};

/**
 * Error message for the form field
 */
export default memo(Error);
