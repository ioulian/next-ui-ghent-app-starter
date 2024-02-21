import { memo } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { PolymorphicComponent } from "react-polymorphed";

import { InferComponentProps } from "@/types/component";

import { label, labelAsterisk } from "./Label.styles.css";

const Label: PolymorphicComponent<
  "label",
  {
    required?: boolean;
  } & InferComponentProps<"label">
> = ({ required, as: Component = "label", children, className, ...props }) => {
  const t = useTranslations("common.form");

  return (
    <Component {...props} className={clsx(label, className)}>
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
