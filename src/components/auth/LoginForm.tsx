/* eslint-disable i18next/no-literal-string */
"use client";

import { FC, memo, useCallback, useState } from "react";

import FormField from "@/components/common/form/form-field/FormField";
import Form from "@/components/common/form/form/Form";
import { required } from "@/components/common/form/rules";
import { type CredentialsType } from "@/auth";
import Input from "@/components/common/form/input/Input";
import PasswordInput from "@/components/common/form/input/PasswordInput";
import Button from "@/components/common/button/Button";
import { login } from "@/components/auth/utils";
import { API_REQUEST_STATUS } from "@/services/api.service";

const LoginForm: FC = () => {
  const [status, setStatus] = useState<API_REQUEST_STATUS>("idle");

  // TODO: use actions!
  const onSubmit = useCallback((data?: CredentialsType) => {
    setStatus("loading");

    login(data)
      .then(() => {
        setStatus("succeeded");
      })
      .catch(() => {
        setStatus("failed");
      });
  }, []);

  return (
    <Form<CredentialsType> defaultValues={{}} onSubmit={onSubmit}>
      {status}
      <FormField<CredentialsType>
        style={{
          flexGrow: 1,
        }}
        label="Username"
        name="username"
        options={{
          ...required,
        }}
      >
        <Input />
      </FormField>
      <FormField<CredentialsType>
        style={{
          flexGrow: 1,
        }}
        label="Password"
        name="password"
        options={{
          ...required,
        }}
      >
        <PasswordInput />
      </FormField>
      <Button type="submit" isLoading={status === "loading"}>
        Submit
      </Button>
    </Form>
  );
};

export default memo(LoginForm);
