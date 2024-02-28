import { FC, memo } from "react";

import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { reactSelectedContainer } from "./ReactSelectContainer.styles";
import styles from "./styles.module.css";

const ReactSelectContainer: FC<InferComponentProps<"div">> = ({ children }) => {
  return (
    <div className={cx(styles["react-select-container"], reactSelectedContainer)}>{children}</div>
  );
};

export default memo(ReactSelectContainer);
