/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabPanel } from "react-tabs";

import Tabs from "./Tabs";
import { tab, tabList } from "./Tabs.styles";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TabList className={tabList}>
          <Tab className={tab}>
            <span>Characteristics</span>
          </Tab>
          <Tab className={tab}>
            <span>Plans &amp; pictures</span>
          </Tab>
          <Tab className={tab}>
            <span>Moodboard</span>
          </Tab>
          <Tab className={tab}>
            <span>Documentation</span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Characteristics content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Plans &amp; pictures content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Moodboard content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Documentation content</h2>
        </TabPanel>
      </>
    ),
  },
};
