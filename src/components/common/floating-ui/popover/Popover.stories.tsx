/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

import Popover from "./Popover";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";
import PopoverHeading from "./PopoverHeading";
import PopoverDescription from "./PopoverDescription";
import PopoverClose from "./PopoverClose";

const meta: Meta<typeof Popover> = {
  title: "UI/Floating UI/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Uncontrolled: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};

export const WithCloseButton: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent withCloseButton>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};

export const PopoverInPopover: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>
          My popover description
          <Popover>
            <PopoverTrigger>My trigger 2</PopoverTrigger>
            <PopoverContent>
              <PopoverHeading>My popover heading 2</PopoverHeading>
              <PopoverDescription>My popover description 2</PopoverDescription>
              <PopoverClose>Close 2</PopoverClose>
            </PopoverContent>
          </Popover>
        </PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};

const ControlledPopover = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Popover open={isOpen} onOpenChange={(isNewOpen) => setIsOpen(isNewOpen)}>
      <PopoverTrigger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        My trigger
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export const Controlled: Story = {
  render: () => <ControlledPopover />,
};

export const CustomElements: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>
        <Button>My trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>
          <Heading>My popover heading</Heading>
        </PopoverHeading>
        <PopoverDescription>
          <Text>
            <p>My popover description</p>
          </Text>
        </PopoverDescription>
        <PopoverClose>
          <Button>Close</Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>
        <Button>My trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  ),
  args: {
    placement: "right",
  },
};
