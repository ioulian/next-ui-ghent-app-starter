"use client";

import { FC } from "react";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";

const Test: FC = () => {
  return (
    <Tooltip>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Tooltip.Trigger>My trigger</Tooltip.Trigger>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </Tooltip>
  );
};

export default Test;
