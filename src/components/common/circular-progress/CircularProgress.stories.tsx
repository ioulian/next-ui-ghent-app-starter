/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";

import CircularProgress from "./CircularProgress";

const meta: Meta<typeof CircularProgress> = {
  title: "UI/Circular Progress",
  component: CircularProgress,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  render: (args) => <CircularProgress {...args} />,
  args: {
    percent: 0.37,
    mainColor: "var(--colors-primary-500)",
  },
};
