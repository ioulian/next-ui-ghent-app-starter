import { memo } from "react";
import { useTranslations } from "next-intl";
import { PolymorphicComponent } from "react-polymorphed";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { label, labelAsterisk } from "./Label.styles";

const Label: PolymorphicComponent<
  "label",
  {
    required?: boolean;
  } & InferComponentProps<"label">
> = ({ required, as: Component = "label", children, ...props }) => {
  const t = useTranslations("common.form");

  return (
    <Component {...addClassNameToProps(props, label)}>
      {children}
      {required ? (
        <span
          aria-label={t("label.required")}
          title={t("label.required")}
          className={labelAsterisk}
        >
          *
        </span>
      ) : null}
    </Component>
  );
};

/**
 * Label component for the form field
 */
export default memo(Label);
