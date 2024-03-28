/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import iconSettings from "@tabler/icons/settings.svg";

import Heading from "@/components/common/heading/Heading";
import Text from "@/components/common/text/Text";

import SvgSprite from "./../svg-sprite/SvgSprite";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => <Alert {...args} />,
  args: {
    variant: "normal",
    children: (
      <>
        <Heading type="h2" size="h3">
          Title
        </Heading>
        <Text>
          <p>Alert description</p>
        </Text>
      </>
    ),
  },
};

export const NoIcon: Story = {
  render: (args) => <Alert {...args} />,
  args: {
    variant: "normal",
    icon: false,
    children: (
      <>
        <Heading type="h2" size="h3">
          Title
        </Heading>
        <Text>
          <p>Alert description</p>
        </Text>
      </>
    ),
  },
};

export const CustomIcon: Story = {
  render: (args) => <Alert {...args} />,
  args: {
    variant: "normal",
    icon: <SvgSprite src={iconSettings} aria-hidden />,
    children: (
      <>
        <Heading type="h2" size="h3">
          Title
        </Heading>
        <Text>
          <p>Alert description</p>
        </Text>
      </>
    ),
  },
};
