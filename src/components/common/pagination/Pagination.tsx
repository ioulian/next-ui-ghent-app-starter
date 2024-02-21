"use client";

import { FC, memo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import clsx from "clsx";

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
        className: clsx(pagination, props.className),
        pageClassName: clsx(paginationPage, props.pageClassName),
        pageLinkClassName: clsx(paginationPageLink, props.pageLinkClassName),
        disabledClassName: clsx(paginationDisabled, props.disabledClassName),
        nextLinkClassName: clsx(paginationPageLink, props.nextLinkClassName),
        previousLinkClassName: clsx(paginationPageLink, props.previousLinkClassName),
        breakLinkClassName: clsx(paginationPageLink, props.breakLinkClassName),
        activeClassName: clsx(paginationPageSelected, props.activeClassName),
      }}
    />
  );
};

export default memo(Pagination);
