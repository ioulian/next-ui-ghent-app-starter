import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { reactSelectContainer } from "./ReactSelectContainer.styles";
import styles from "./styles.module.css";

const ReactSelectContainer: FC<InferComponentProps<"div">> = ({ children, ...props }) => {
  return (
    <div {...addClassNameToProps(props, styles["react-select-container"], reactSelectContainer)}>
      {children}
    </div>
  );
};

/**
 * Styling wrapper for `react-select`.
 */
export default memo(ReactSelectContainer);
