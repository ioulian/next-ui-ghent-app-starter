import { memo } from "react";
import { useTranslations } from "next-intl";
import { PolymorphicComponent } from "react-polymorphed";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { label, labelAsterisk } from "./Label.styles";

const Label: PolymorphicComponent<
  "label",
  {
    required?: boolean;
  } & InferComponentProps<"label">
> = ({ required, as: Component = "label", children, className, ...props }) => {
  const t = useTranslations("common.form");

  return (
    <Component {...props} className={cx(label, className)}>
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

export default memo(Label);
