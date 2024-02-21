import { FC, memo } from "react";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";
import { reactSelectContainer } from "@/components/common/form/react-select/ReactSelect.styles.css";

const ReactSelectContainer: FC<InferComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={clsx(reactSelectContainer, className)}>
      {children}
    </div>
  );
};

export default memo(ReactSelectContainer);
