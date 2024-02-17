/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Common/  Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Link href="/" passHref legacyBehavior>
        <a href="#test">Home</a>
      </Link>
      <Link href="/parent-1" passHref legacyBehavior>
        <a href="#test">Parent 1</a>
      </Link>
      <Link href="/parent-1/parent-2" passHref legacyBehavior>
        <a href="#test">Parent 2</a>
      </Link>
      <Link href="/parent-1/parent-2/current" passHref legacyBehavior>
        <a href="#test">Current</a>
      </Link>
    </Breadcrumb>
  ),
};
