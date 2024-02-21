import { FC, memo } from "react";

import { ApiError } from "@/components/common/form/types";

const ApiFormError: FC<{ error: ApiError }> = ({ error }) => {
  return <div>{error.title ? <p>{error.title}</p> : null}</div>;
};

export default memo(ApiFormError);
