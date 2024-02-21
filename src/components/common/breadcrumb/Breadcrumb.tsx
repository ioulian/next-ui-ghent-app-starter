import { Children, cloneElement, FC, isValidElement, memo } from "react";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { li, nav, ol } from "./Breadcrumb.styles";

const Breadcrumb: FC<InferComponentProps<"nav">> = ({ children, className, ...props }) => {
  const t = useTranslations("common");

  return (
    <nav aria-label={t("breadcrumb.label")} {...props} className={cx(nav, className)}>
      <ol className={ol}>
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) {
            return null;
          }

          const isCurrent = !Array.isArray(children) || i === children?.length - 1;

          return (
            <li key={i} className={li}>
              {cloneElement(child, {
                ...child.props,
                ...(isCurrent ? { "aria-current": "page" } : {}),
              })}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default memo(Breadcrumb);
