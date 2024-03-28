import path from "path";

import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

import { injectToWebpackConfig } from "./../scripts/svg-sprite-sheet.mjs";

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
  },
  docs: {
    autodocs: "tag",
  },
  env: {
    IS_STORYBOOK: "true",
  },
  webpackFinal: async (config) => {
    injectToWebpackConfig(config);

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Needs to be a copy from tsconfig.json
        "@/styled-system": path.resolve(__dirname, "../styled-system"),
        "@/types": path.resolve(__dirname, "../src/@types"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/utils": path.resolve(__dirname, "../src/utils"),
        "@/lib": path.resolve(__dirname, "../src/lib"),
        "@/hooks": path.resolve(__dirname, "../src/hooks"),
        "@/styles": path.resolve(__dirname, "../src/styles"),
        "@/services": path.resolve(__dirname, "../src/services"),
        "@": path.resolve(__dirname, "../src"),
      };
      config.resolve.plugins?.push(
        new TsconfigPathsPlugin({
          //extensions: config.resolve.extensions,
          //configFile: path.join(__dirname, "../tsconfig.json"),
        }),
      );
    }

    return config;
  },
};

export default config;
