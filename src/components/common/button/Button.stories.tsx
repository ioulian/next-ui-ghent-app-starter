/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import iconChevronRight from "@tabler/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/chevron-left.svg";
import iconSettings from "@tabler/icons/settings.svg";
import Link from "next/link";

// import Tooltip from "../floating/tooltip/Tooltip";

import Tooltip from "../floating-ui/tooltip/Tooltip";
import TooltipTrigger from "../floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "../floating-ui/tooltip/TooltipContent";

import SvgSprite from "./../svg-sprite/SvgSprite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
  args: {
    intent: "primary",
    size: "normal",
    isLoading: false,
    children: "Button",
    disabled: false,
    iconOnly: false,
    fullWidth: false,
  },
};

export const WithIcons: Story = {
  render: (args) => <Button {...args} />,
  args: {
    intent: "primary",
    size: "normal",
    isLoading: false,
    children: "Button",
    disabled: false,
    iconOnly: false,
    fullWidth: false,
    iconBefore: <SvgSprite src={iconChevronLeft} title="test-title" />,
    iconAfter: <SvgSprite src={iconChevronRight} title="test-title" />,
  },
};

export const IconOnly: Story = {
  render: (args) => <Button {...args} />,
  args: {
    size: "base",
    intent: "simple",
    children: "Settings",
    disabled: false,
    isLoading: false,
    fullWidth: false,
    iconBefore: <SvgSprite src={iconSettings} />,
    iconOnly: true,
  },
};

export const AccessibleIconButton: Story = {
  render: (args) => (
    <Tooltip placement="bottom">
      <TooltipTrigger>
        <Button {...args} />
      </TooltipTrigger>
      <TooltipContent>Settings</TooltipContent>
    </Tooltip>
  ),
  args: {
    size: "base",
    intent: "simple",
    children: "Settings",
    disabled: false,
    isLoading: false,
    fullWidth: false,
    iconBefore: <SvgSprite src={iconSettings} />,
    iconOnly: true,
  },
};

export const Text: Story = {
  render: (args) => <Button {...args} />,
  args: {
    size: "base",
    intent: "simple",
    children: "Settings",
    disabled: false,
    isLoading: false,
    fullWidth: false,
  },
};

export const NextLink: Story = {
  render: (args) => <Button as={Link} href="/test" target="_blank" {...args} />,
  args: {
    intent: "primary",
    as: "a",
    children: "Navigate to another page",
    disabled: false,
    isLoading: false,
    iconOnly: false,
    fullWidth: false,
    size: "normal",
    iconAfter: <SvgSprite src={iconChevronRight} />,
  },
};
