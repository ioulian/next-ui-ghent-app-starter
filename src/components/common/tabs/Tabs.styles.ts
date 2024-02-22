import { css } from "@/styled-system/css";

export const tabsContainer = css({
  WebkitTapHighlightColor: "transparent",
});

export const tabs = css({});

export const tabList = css({
  display: "flex",
  gap: "0.5rem",
  marginBottom: "1rem",
});

export const tab = css({
  position: "relative",
  listStyle: "none",
  cursor: "pointer",
  letterSpacing: "-0.02em",
  transition: "colors",
  transitionDuration: "fast",
  marginBottom: "-1px",
  outlineOffset: "4px",
  _notLastChild: {
    marginRight: "1.75rem",
  },
  "& > span": {
    paddingBottom: "0.5rem",
    display: "block",
  },
});

export const tabSelected = css({
  "& > span": {
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: "primary.500",
  },
});

export const tabDisabled = css({
  opacity: "0.5",
  cursor: "default",
});

export const tabPanelSelected = css({
  display: "block",
});

//export const StyledTabs = styled.div`
//
//  .react-tabs {
//
//    &__tab:focus .react-tabs__tab-panel {
//      display: none;
//    }
//  }
//`;
