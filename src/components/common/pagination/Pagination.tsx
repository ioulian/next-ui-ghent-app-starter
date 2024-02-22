"use client";

import { FC, memo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

import { cx } from "@/styled-system/css";

import {
  pagination,
  paginationDisabled,
  paginationPage,
  paginationPageLink,
  paginationPageSelected,
} from "./Pagination.styles";

const Pagination: FC<ReactPaginateProps> = (props) => {
  return (
    <ReactPaginate
      {...{
        ...props,
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
  );
};

export default memo(Pagination);
