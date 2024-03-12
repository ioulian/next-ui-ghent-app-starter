import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";

import { cx } from "@/styled-system/css";
import { circle } from "@/styled-system/patterns";

import { getAvatarInitials } from "./utilities";

const AvatarInitials: FC<{
  initials: string;
  backgroundColor: string;
  textColor?: string;
}> = ({ initials, backgroundColor, textColor }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cx(circle({ size: "42px", overflow: "hidden" }))}
      src={getAvatarInitials(initials, backgroundColor, textColor)}
      alt=""
    />
  );
};

const meta: Meta<typeof AvatarInitials> = {
  title: "Tools/Avatar Initials",
  component: AvatarInitials,
};
export default meta;
type Story = StoryObj<typeof AvatarInitials>;

export const Example: Story = {
  args: {
    backgroundColor: "rgb(3, 131, 135)",
    textColor: "#fff",
    initials: "YA",
  },
};
