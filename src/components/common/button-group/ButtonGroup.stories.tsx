/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";

import Button from "../button/Button";

import ButtonGroup from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/Button/Group",
  component: ButtonGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
      <hr />
      <Button size="base" variant="simple">
        Cancel
      </Button>
    </ButtonGroup>
  ),
  args: {},
};

export const AlignRight: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="base" variant="simple">
        Cancel
      </Button>
      <hr />
      <Button>Primary Action</Button>
    </ButtonGroup>
  ),
  args: {
    alignRight: true,
  },
};
