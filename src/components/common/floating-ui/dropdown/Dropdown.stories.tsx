/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import iconChevron from "@tabler/icons/chevron-right.svg";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { userEvent, within, expect, screen } from "@storybook/test";

import DialogTrigger from "@/components/common/floating-ui/dialog/DialogTrigger";
import DialogContent from "@/components/common/floating-ui/dialog/DialogContent";
import DropdownMenuItem from "@/components/common/floating-ui/dropdown/DropdownMenuItem";
import { convertThemeVarToNumber } from "@/styles/utils";
import { token } from "@/styled-system/tokens";
import { wait } from "@/utils/promises";

import Button from "../../button/Button";
import SvgSprite from "../../svg-sprite/SvgSprite";
import Dialog from "../dialog/Dialog";

import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Floating UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("trigger"));
    await wait(convertThemeVarToNumber(token("durations.normal")));
    await expect(screen.getByTestId("trigger2")).toBeVisible();

    await userEvent.hover(screen.getByTestId("trigger2"));
    await wait(convertThemeVarToNumber(token("durations.normal")));
    await expect(screen.getByTestId("trigger3")).toBeVisible();

    await userEvent.hover(screen.getByTestId("trigger3"));
    await wait(convertThemeVarToNumber(token("durations.normal")));
    await expect(screen.getByTestId("trigger4")).toBeVisible();

    await userEvent.click(screen.getByTestId("trigger4"));
    await wait(convertThemeVarToNumber(token("durations.fast")));
    await expect(screen.queryByTestId("trigger4")).toBeNull();
  },
  render: (args) => (
    <Dropdown {...args}>
      <DropdownMenuItem onClick={action("Undo")} typeaheadKey="Undo">
        Undo
      </DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Redo">Redo</DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Cut" disabled>
        Cut
      </DropdownMenuItem>
      <Dropdown
        trigger={
          <button type="button" data-testid="trigger2">
            Copy as &gt;
          </button>
        }
        typeaheadKey="Copy as"
      >
        <DropdownMenuItem typeaheadKey="Text">Text</DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Video">Video</DropdownMenuItem>
        <Dropdown
          trigger={
            <button type="button" data-testid="trigger3">
              Image &gt;
            </button>
          }
          typeaheadKey="Image"
        >
          <DropdownMenuItem typeaheadKey=".png">.png</DropdownMenuItem>
          <DropdownMenuItem typeaheadKey=".jpg" data-testid="trigger4">
            .jpg
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey=".svg">.svg</DropdownMenuItem>
          <DropdownMenuItem typeaheadKey=".gif">.gif</DropdownMenuItem>
        </Dropdown>
        <DropdownMenuItem typeaheadKey="Audio">Audio</DropdownMenuItem>
      </Dropdown>
      <Dropdown trigger="Share >" typeaheadKey="Share">
        <DropdownMenuItem typeaheadKey="Mail">Mail</DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Instagram">Instagram</DropdownMenuItem>
      </Dropdown>
    </Dropdown>
  ),
  args: {
    trigger: (
      <button type="button" data-testid="trigger">
        Menu
      </button>
    ),
  },
};

export const CustomElements: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownMenuItem typeaheadKey="Undo">
        <Button variant="secondary">Undo</Button>
      </DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Redo">
        <Button variant="secondary">Redo</Button>
      </DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Cut" disabled>
        <Button>Cut</Button>
      </DropdownMenuItem>
      <Dropdown
        trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Copy as</Button>}
        typeaheadKey="Copy as"
      >
        <DropdownMenuItem typeaheadKey="Text">
          <Button>Text</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Video">
          <Button>Video</Button>
        </DropdownMenuItem>
        <Dropdown
          trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Image</Button>}
          typeaheadKey="Image"
        >
          <DropdownMenuItem typeaheadKey=".png">
            <Button>.png</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey=".jpg">
            <Button>.jpg</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey=".svg">
            <Button>.svg</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey=".gif">
            <Button>.gif</Button>
          </DropdownMenuItem>
        </Dropdown>
        <DropdownMenuItem typeaheadKey="Audio">
          <Button>Audio</Button>
        </DropdownMenuItem>
      </Dropdown>
      <Dropdown
        trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Share</Button>}
        typeaheadKey="Share"
      >
        <DropdownMenuItem typeaheadKey="Mail">
          <Button>Mail</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Instagram">
          <Button>Instagram</Button>
        </DropdownMenuItem>
      </Dropdown>
    </Dropdown>
  ),
  args: {
    trigger: <Button>Menu</Button>,
  },
};

const WithOverlayComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dropdown trigger={<Button>Open</Button>}>
      <DropdownMenuItem typeaheadKey="Copy">
        <Button>Copy</Button>
      </DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Edit">
        <Button>Edit</Button>
      </DropdownMenuItem>
      <Dialog open={isOpen} onOpenChange={(isNewOpen) => setIsOpen(isNewOpen)}>
        <DialogTrigger>
          <DropdownMenuItem
            typeaheadKey="Delete"
            closeOnClick={false}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Button>Delete</Button>
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent>
          Delete this item?
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Ok
          </Button>
        </DialogContent>
      </Dialog>
    </Dropdown>
  );
};

export const WithOverlay: Story = {
  render: () => <WithOverlayComponent />,
};
