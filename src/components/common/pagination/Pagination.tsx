"use client";

import { Component, FC, memo, useEffect, useRef } from "react";
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
  const ref = useRef<Component<ReactPaginateProps> | null>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
    }
  }, [ref]);

  return (
    <div role="navigation">
      <ReactPaginate
        ref={ref}
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

export default memo(Pagination);
