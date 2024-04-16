"use client";

import { Table, flexRender } from "@tanstack/react-table";
import iconSort from "@tabler/icons/outline/arrows-sort.svg";
import iconSortAsc from "@tabler/icons/outline/sort-ascending.svg";
import iconSortDesc from "@tabler/icons/outline/sort-descending.svg";
import { useTranslations } from "next-intl";
import { ChangeEvent, useCallback } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { cx } from "@/styled-system/css";
import Pagination from "@/components/common/pagination/Pagination";
import Select from "@/components/common/form/select/Select";

import {
  footerControls,
  sort,
  sortable,
  tableBodyTd,
  table as tableClassName,
  tableFooter,
  tableHeadThButton,
  tdTh,
  wrapper,
} from "./DataTable.styles";

/**
 * Table to be used for tanstack table
 *
 * TODO: we can split some parts to not make this component client component
 */
const DataTable = <T,>({
  table,
  showPagination = false,
  showPerPages,
  showFooter = false,
  ...props
}: {
  /**
   * (Tanstack) Table to render
   */
  table: Table<T>;

  /**
   * Show pagination
   */
  showPagination?: boolean;

  /**
   * Show <tfoot>, if the table is long, this could be useful to enable
   */
  showFooter?: boolean;

  /**
   * Show selector for page size, provide an array of page sizes
   */
  showPerPages?: number[];
} & InferComponentProps<"div">) => {
  const t = useTranslations("common.dataTable");
  const showControls = showPagination || showPerPages;

  const pageSizeOnSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      table.setPageSize(Number(e.target.value));
    },
    [table],
  );

  return (
    <div {...addClassNameToProps(props, wrapper)}>
      <table className={tableClassName}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={tdTh}>
                  {!header.isPlaceholder && (
                    <button
                      type="button"
                      {...{
                        className: cx(tableHeadThButton, header.column.getCanSort() && sortable),
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === "asc"
                            ? t("sorting.asc")
                            : header.column.getNextSortingOrder() === "desc"
                              ? t("sorting.desc")
                              : t("sorting.clear")
                          : undefined
                      }
                    >
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      {header.column.getCanSort() && (
                        <SvgSprite
                          src={
                            header.column.getIsSorted() === false
                              ? iconSort
                              : {
                                  asc: iconSortAsc,
                                  desc: iconSortDesc,
                                }[header.column.getIsSorted() as string]
                          }
                          className={sort}
                        />
                      )}
                    </button>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={cx(tdTh, tableBodyTd)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {showFooter ? (
          <tfoot className={tableFooter}>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id} className={tdTh}>
                    {!header.isPlaceholder &&
                      flexRender(header.column.columnDef.footer, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        ) : null}
      </table>
      {showControls ? (
        <div className={footerControls}>
          {showPagination ? (
            <Pagination
              forcePage={table.getState().pagination.pageIndex}
              onPageChange={(e) => {
                table.setPageIndex(e.selected);
              }}
              pageCount={table.getPageCount()}
            />
          ) : null}
          {showPerPages ? (
            <Select value={table.getState().pagination.pageSize} onChange={pageSizeOnSelect}>
              {showPerPages.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {t("pageSize.label", { pageSize })}
                </option>
              ))}
            </Select>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default DataTable;
