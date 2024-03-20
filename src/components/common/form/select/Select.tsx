import { forwardRef, memo } from "react";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { cx } from "@/styled-system/css";

import { select } from "./Select.styles";

const Select = forwardRef<
  HTMLSelectElement,
  {
    /**
     * Add empty option as first item
     */
    addEmptyOption?: boolean;
    isError?: boolean;
  } & InferComponentProps<"select">
>(({ addEmptyOption = false, children, isError, className, ...props }, ref) => {
  const t = useTranslations("common.form");

  return (
    <select {...props} className={cx(baseFormField({ isError }), select, className)} ref={ref}>
      {addEmptyOption ? <option value="">{t("select.emptyValue")}</option> : null}
      {children}
    </select>
  );
});

Select.displayName = "Select";

/**
 * Select field
 */
export default memo(Select);
