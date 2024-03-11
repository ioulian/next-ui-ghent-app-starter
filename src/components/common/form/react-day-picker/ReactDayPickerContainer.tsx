import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { reactDayPickerContainer } from "./ReactDayPickerContainer.styles";
import styles from "./styles.module.css";

import "react-day-picker/dist/style.css";

const ReactDayPickerContainer: FC<InferComponentProps<"div">> = ({ children }) => {
  return (
    <div className={cx(styles["react-day-picker-container"], reactDayPickerContainer)}>
      {children}
    </div>
  );
};

/**
 * Styling container for `react-day-picker`. Will also load needed css for the library
 */
export default memo(ReactDayPickerContainer);
