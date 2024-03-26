import { FC, memo } from "react";

import { ApiError } from "@/components/common/form/types";
import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import { apiFormError } from "./ApiFormError.styles";

const ApiFormError: FC<{ error: ApiError } & Omit<InferComponentProps<"div">, "children">> = ({
  error,
  ...props
}) => {
  return (
    <div {...addClassNameToProps(props, apiFormError)}>
      <p>{error.title}</p>
    </div>
  );
};

export default memo(ApiFormError);
