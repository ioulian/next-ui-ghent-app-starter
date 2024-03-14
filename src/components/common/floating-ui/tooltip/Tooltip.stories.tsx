/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";

import Tooltip from "./Tooltip";
import TooltipTrigger from "./TooltipTrigger";
import TooltipContent from "./TooltipContent";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Floating UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Uncontrolled: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>My trigger</TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </Tooltip>
  ),
};

const ControlledTooltip = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Tooltip open={isOpen} onOpenChange={(isNewOpen) => setIsOpen(isNewOpen)}>
      <TooltipTrigger
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        My trigger
      </TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </Tooltip>
  );
};

export const Controlled: Story = {
  render: () => <ControlledTooltip />,
  args: {
    open: true,
  },
};

export const CustomElements: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button>My trigger</Button>
      </TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </Tooltip>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button>My trigger</Button>
      </TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </Tooltip>
  ),
  args: {
    placement: "right",
  },
};
