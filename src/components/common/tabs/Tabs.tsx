"use client";

import { FC, memo } from "react";
import { Tabs as ReactTabs } from "react-tabs";

import { cx } from "@/styled-system/css";
import { InferComponentProps } from "@/types/component";

import { tabDisabled, tabPanelSelected, tabSelected, tabs, tabsContainer } from "./Tabs.styles";

const Tabs: FC<InferComponentProps<typeof ReactTabs>> = ({
  children,
  className,
  disabledTabClassName,
  selectedTabClassName,
  selectedTabPanelClassName,
  ...props
}) => {
  return (
    <div className={tabsContainer}>
      <ReactTabs
        {...props}
        className={cx(tabs, typeof className === "string" ? className : undefined)}
        disabledTabClassName={cx(tabDisabled, disabledTabClassName)}
        selectedTabClassName={cx(tabSelected, selectedTabClassName)}
        selectedTabPanelClassName={cx(tabPanelSelected, selectedTabPanelClassName)}
      >
        {children}
      </ReactTabs>
    </div>
  );
};

/**
 * Wrapper around `react-tabs` with correct styling
 */
export default memo(Tabs);
