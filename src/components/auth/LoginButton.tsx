/* eslint-disable i18next/no-literal-string */
"use client";

import { FC, memo } from "react";

import LoginForm from "@/components/auth/LoginForm";
import Button from "@/components/common/button/Button";
import Popover from "@/components/common/floating-ui/popover/Popover";
import Heading from "@/components/common/heading/Heading";
import PopoverTrigger from "@/components/common/floating-ui/popover/PopoverTrigger";
import PopoverContent from "@/components/common/floating-ui/popover/PopoverContent";
import PopoverHeading from "@/components/common/floating-ui/popover/PopoverHeading";
import PopoverDescription from "@/components/common/floating-ui/popover/PopoverDescription";

const LoginButton: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Login</Button>
      </PopoverTrigger>
      <PopoverContent withCloseButton>
        <PopoverHeading>
          <Heading>Login</Heading>
        </PopoverHeading>
        <PopoverDescription>
          <LoginForm />
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  );
};

export default memo(LoginButton);
