import { css } from "@/styled-system/css";

export const buttonBar = css({
  borderRadius: "normal",
  "& > *": {
    marginLeft: "-1px",
    _notFirstChild: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    _notLastChild: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});
