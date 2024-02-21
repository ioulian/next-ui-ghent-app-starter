import { forwardRef, memo } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import { select } from "./Select.styles.css";

const Select = forwardRef<
  HTMLSelectElement,
  {
    addEmptyOption?: boolean;
  } & InferComponentProps<"select">
>(({ addEmptyOption = false, children, className, ...props }, ref) => {
  const t = useTranslations("common.form");

  return (
    <select {...props} className={clsx(select, className)} ref={ref}>
      {addEmptyOption ? <option value="">{t("select.emptyValue")}</option> : null}
      {children}
    </select>
  );
});

if (process.env.NODE_ENV === "development") {
  Select.displayName = "Select";
}

export default memo(Select);
