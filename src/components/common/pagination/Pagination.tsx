"use client";

import { FC, memo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useTranslations } from "next-intl";

import { cx } from "@/styled-system/css";

import {
  pagination,
  paginationDisabled,
  paginationPage,
  paginationPageLink,
  paginationPageSelected,
} from "./Pagination.styles";

const Pagination: FC<ReactPaginateProps> = (props) => {
  const t = useTranslations("common.pagination");

  return (
    <div role="navigation">
      <ReactPaginate
        {...{
          ...props,
          breakAriaLabels: {
            backward: t("aria.break.backward"),
            forward: t("aria.break.forward"),
          },
          ariaLabelBuilder: (page) => t("aria.page", { page }),
          previousAriaLabel: t("aria.previous"),
          nextAriaLabel: t("aria.next"),
          className: cx(pagination, props.className),
          pageClassName: cx(paginationPage, props.pageClassName),
          pageLinkClassName: cx(paginationPageLink, props.pageLinkClassName),
          disabledClassName: cx(paginationDisabled, props.disabledClassName),
          nextLinkClassName: cx(paginationPageLink, props.nextLinkClassName),
          previousLinkClassName: cx(paginationPageLink, props.previousLinkClassName),
          breakLinkClassName: cx(paginationPageLink, props.breakLinkClassName),
          activeClassName: cx(paginationPageSelected, props.activeClassName),
        }}
      />
    </div>
  );
};

/**
 * Pagination wrapper around `react-paginate`, providing correct translations and styling.
 */
export default memo(Pagination);
