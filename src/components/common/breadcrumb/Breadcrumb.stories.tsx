/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import { userEvent, within, expect } from "@storybook/test";

import Button from "@/components/common/button/Button";

import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button1"));
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button2"));
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button3"));
    await userEvent.tab();
    await expect(document.activeElement).toBe(canvas.getByTestId("button4"));
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <Button href="/" as={Link} intent="link" size="base" data-testid="button1">
        Home
      </Button>
      <Button href="/parent-1" as={Link} intent="link" size="base" data-testid="button2">
        Parent 1
      </Button>
      <Button href="/parent-2" as={Link} intent="link" size="base" data-testid="button3">
        Parent 2
      </Button>
      <Button href="/current" as={Link} intent="link" size="base" data-testid="button4">
        Current
      </Button>
    </Breadcrumb>
  ),
};
