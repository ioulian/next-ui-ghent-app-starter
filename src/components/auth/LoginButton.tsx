/* eslint-disable i18next/no-literal-string */
"use client";

import { FC, memo } from "react";

import LoginForm from "@/components/auth/LoginForm";
import Button from "@/components/common/button/Button";
import Popover from "@/components/common/floating-ui/popover/Popover";
import Heading from "@/components/common/heading/Heading";

const LoginButton: FC = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Login</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>
          <Heading>Login</Heading>
        </Popover.Heading>
        <Popover.Description>
          <LoginForm />
        </Popover.Description>
        <Popover.Close>
          <Button>Close</Button>
        </Popover.Close>
      </Popover.Content>
    </Popover>
  );
};

export default memo(LoginButton);
