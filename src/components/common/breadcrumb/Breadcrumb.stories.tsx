/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

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
  render: (args) => (
    <Breadcrumb {...args}>
      <Button href="/" as={Link} variant="link" size="base">
        Home
      </Button>
      <Button href="/parent-1" as={Link} variant="link" size="base">
        Parent 1
      </Button>
      <Button href="/parent-2" as={Link} variant="link" size="base">
        Parent 2
      </Button>
      <Button href="/current" as={Link} variant="link" size="base">
        Current
      </Button>
    </Breadcrumb>
  ),
};
