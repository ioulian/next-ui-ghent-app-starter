import { FC, memo } from "react";

import { ApiError } from "@/components/common/form/types";
import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";
import Alert from "@/components/common/alert/Alert";
import Heading from "@/components/common/heading/Heading";
import Text from "@/components/common/text/Text";

import { apiFormError } from "./ApiFormError.styles";

const ApiFormError: FC<
  { error: ApiError } & Omit<InferComponentProps<typeof Alert>, "children">
> = ({ error, ...props }) => {
  return (
    <Alert variant="danger" {...addClassNameToProps(props, apiFormError)}>
      <Heading type="h2" size="h3">
        {error.title}
      </Heading>
      <Text>
        <p>{error.message}</p>
      </Text>
    </Alert>
  );
};

export default memo(ApiFormError);
