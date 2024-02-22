import { FC, memo } from "react";
import { Tabs as ReactTabs } from "react-tabs";

import { cx } from "@/styled-system/css";
import { InferComponentProps } from "@/types/component";

import { tabDisabled, tabPanelSelected, tabSelected, tabs, tabsContainer } from "./Tabs.styles";

const Tabs: FC<InferComponentProps<typeof ReactTabs>> = ({ children, className, ...props }) => {
  return (
    <div className={tabsContainer}>
      <ReactTabs
        {...props}
        className={cx(tabs, typeof className === "string" ? className : undefined)}
        // TODO: merge with original values
        disabledTabClassName={tabDisabled}
        selectedTabClassName={tabSelected}
        selectedTabPanelClassName={tabPanelSelected}
      >
        {children}
      </ReactTabs>
    </div>
  );
};

export default memo(Tabs);
