/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import Button from "../button/Button";

import ButtonGroup from "./ButtonGroup";
import ButtonGroupSeparator from "./ButtonGroupSeparator";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/Button/Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button1"));
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button2"));
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button3"));
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button data-testid="button1">Primary Action</Button>
      <Button variant="secondary" data-testid="button2">
        Secondary Action
      </Button>
      <ButtonGroupSeparator />
      <Button size="base" variant="simple" data-testid="button3">
        Cancel
      </Button>
    </ButtonGroup>
  ),
  args: {},
};

export const AlignEnd: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="base" variant="simple">
        Cancel
      </Button>
      <ButtonGroupSeparator />
      <Button>Primary Action</Button>
    </ButtonGroup>
  ),
  args: {
    align: "end",
  },
};
