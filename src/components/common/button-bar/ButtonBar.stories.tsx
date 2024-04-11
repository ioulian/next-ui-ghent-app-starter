/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import iconVariantNormal from "@tabler/icons/info-circle.svg";
import iconVariantDanger from "@tabler/icons/alert-circle.svg";
import iconVariantSuccess from "@tabler/icons/circle-check.svg";

import SvgSprite from "@/components/common/svg-sprite/SvgSprite";

import Button from "../button/Button";

import ButtonBar from "./ButtonBar";

const meta: Meta<typeof ButtonBar> = {
  title: "UI/Button/Bar",
  component: ButtonBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBar>;

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
    <ButtonBar {...args}>
      <Button data-testid="button1">Primary Action</Button>
      <Button variant="outline" data-testid="button2">
        Secondary Action
      </Button>
      <Button variant="outline" data-testid="button3">
        Cancel
      </Button>
    </ButtonBar>
  ),
  args: {},
};

export const IconsOnly: Story = {
  render: (args) => (
    <ButtonBar {...args}>
      <Button
        data-testid="button1"
        size="small"
        iconBefore={<SvgSprite src={iconVariantNormal} />}
        aria-label="Button 1"
      />
      <Button
        variant="outline"
        size="small"
        data-testid="button2"
        iconBefore={<SvgSprite src={iconVariantDanger} />}
        aria-label="Button 2"
      />
      <Button
        variant="outline"
        size="small"
        data-testid="button3"
        iconBefore={<SvgSprite src={iconVariantSuccess} />}
        aria-label="Button 3"
      />
    </ButtonBar>
  ),
  args: {},
};
