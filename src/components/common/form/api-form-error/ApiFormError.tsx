import { FC, memo } from "react";

import { ApiError } from "@/components/common/form/types";
import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import { apiFormError } from "./ApiFormError.styles";

const ApiFormError: FC<{ error: ApiError } & Omit<InferComponentProps<"div">, "children">> = ({
  error,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cx(apiFormError, className)}>
      <p>{error.title}</p>
    </div>
  );
};

export default memo(ApiFormError);
