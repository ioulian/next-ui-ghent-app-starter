/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import iconChevronRight from "@tabler/icons/outline/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/outline/chevron-left.svg";
import iconSettings from "@tabler/icons/outline/settings.svg";
import Link from "next/link";

import Tooltip from "../floating-ui/tooltip/Tooltip";
import TooltipTrigger from "../floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "../floating-ui/tooltip/TooltipContent";

import SvgSprite from "./../svg-sprite/SvgSprite";
import LinkButton from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "UI/Button/Link Button",
  component: LinkButton,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  render: (args) => <LinkButton {...args} />,
  args: {
    variant: "primary",
    size: "normal",
    children: "Button",
    iconOnly: false,
    fullWidth: false,
  },
};

export const WithIcons: Story = {
  render: (args) => <LinkButton {...args} />,
  args: {
    variant: "primary",
    size: "normal",
    children: "Button",
    iconOnly: false,
    fullWidth: false,
    iconBefore: <SvgSprite src={iconChevronLeft} title="test-title" />,
    iconAfter: <SvgSprite src={iconChevronRight} title="test-title" />,
  },
};

export const IconOnly: Story = {
  render: (args) => <LinkButton {...args} />,
  args: {
    size: "base",
    variant: "simple",
    children: "Settings",
    fullWidth: false,
    iconBefore: <SvgSprite src={iconSettings} />,
    iconOnly: true,
  },
};

export const AccessibleIconButton: Story = {
  render: (args) => (
    <Tooltip placement="bottom">
      <TooltipTrigger>
        <LinkButton {...args} />
      </TooltipTrigger>
      <TooltipContent>Settings</TooltipContent>
    </Tooltip>
  ),
  args: {
    size: "base",
    variant: "simple",
    children: "Settings",
    fullWidth: false,
    iconBefore: <SvgSprite src={iconSettings} />,
    iconOnly: true,
  },
};

export const Text: Story = {
  render: (args) => <LinkButton {...args} />,
  args: {
    size: "base",
    variant: "simple",
    children: "Settings",
    fullWidth: false,
  },
};

export const NextLink: Story = {
  render: (args) => <LinkButton as={Link} href="/test" target="_blank" {...args} />,
  args: {
    variant: "primary",
    children: "Navigate to another page",
    disabled: false,
    isLoading: false,
    iconOnly: false,
    fullWidth: false,
    size: "normal",
    iconAfter: <SvgSprite src={iconChevronRight} />,
  },
};
