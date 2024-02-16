import type { Meta, StoryObj } from "@storybook/react";

import LocaleSwitcher from "./LocaleSwitcher";

const meta: Meta<typeof LocaleSwitcher> = {
  title: "UI/Common/Locale Switcher",
  component: LocaleSwitcher,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LocaleSwitcher>;

export const Default: Story = {};
