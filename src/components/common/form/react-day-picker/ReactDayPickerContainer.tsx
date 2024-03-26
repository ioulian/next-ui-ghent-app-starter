import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { reactDayPickerContainer } from "./ReactDayPickerContainer.styles";
import styles from "./styles.module.css";

import "react-day-picker/dist/style.css";

const ReactDayPickerContainer: FC<InferComponentProps<"div">> = ({ children, ...props }) => {
  return (
    <div
      {...addClassNameToProps(props, styles["react-day-picker-container"], reactDayPickerContainer)}
    >
      {children}
    </div>
  );
};

/**
 * Styling container for `react-day-picker`. Will also load needed css for the library
 */
export default memo(ReactDayPickerContainer);
