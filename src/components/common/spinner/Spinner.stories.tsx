import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    children: "Loading...",
  },
};

export const WithCustomColors: Story = {
  args: {
    variant: "fullSize",
    primaryColor: "#fff",
    secondaryColor: "#647373",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    style: { width: "200px", height: "200px" },
  },
};

export const FullSize: Story = {
  args: {
    variant: "fullSize",
  },
};
