/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { userEvent, within, expect } from "@storybook/test";

import { token } from "@/styled-system/tokens";
import { convertThemeVarToNumber } from "@/styles/utils";
import { wait } from "@/utils/promises";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("trigger"));
    await wait(convertThemeVarToNumber(token("durations.normal")));
    await expect(document.body.querySelector("[data-testid='content']")).toBeVisible();
    await userEvent.unhover(canvas.getByTestId("trigger"));
    await wait(convertThemeVarToNumber(token("durations.fast")));
    await expect(document.body.querySelector("[data-testid='content']")).toBeNull();
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger data-testid="trigger">My trigger</TooltipTrigger>
      <TooltipContent data-testid="content">My tooltip</TooltipContent>
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
