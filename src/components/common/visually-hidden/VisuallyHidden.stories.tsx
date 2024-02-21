/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";

import VisuallyHidden from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "UI/Visually Hidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: (args) => (
    <p>
      The text between (<VisuallyHidden {...args} />) is visually hidden, but still readable by
      screen readers.
    </p>
  ),
  args: {
    children: "this text",
  },
};
