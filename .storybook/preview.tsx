import React from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Preview } from "@storybook/react";

import messages from "../messages/en-GB/common.json";
import { htmlFontClass } from "../src/styles/fonts";

import "./../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      document.documentElement.classList.add(htmlFontClass);
      return (
        <NextIntlClientProvider locale="en-GB" messages={messages}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
