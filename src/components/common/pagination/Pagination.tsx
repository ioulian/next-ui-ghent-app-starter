import { FC, memo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import clsx from "clsx";

import {
  pagination,
  paginationBreakPageLink,
  paginationDisabled,
  paginationNextPageLink,
  paginationPage,
  paginationPageLink,
  paginationPageSelected,
  paginationPreviousPageLink,
} from "./Pagination.styles.css";

const Pagination: FC<ReactPaginateProps> = (props) => {
  return (
    <ReactPaginate
      {...{
        ...props,
        className: clsx(pagination, props.className),
        pageClassName: clsx(paginationPage, props.pageClassName),
        pageLinkClassName: clsx(paginationPageLink, props.pageLinkClassName),
        disabledClassName: clsx(paginationDisabled, props.disabledClassName),
        nextLinkClassName: clsx(paginationNextPageLink, props.nextLinkClassName),
        previousLinkClassName: clsx(paginationPreviousPageLink, props.previousLinkClassName),
        breakLinkClassName: clsx(paginationBreakPageLink, props.breakLinkClassName),
        activeClassName: clsx(paginationPageSelected, props.activeClassName),
      }}
    />
  );
};

export default memo(Pagination);
