// @ts-check
import crypto from "crypto";

import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";

import { injectToWebpackConfig } from "./scripts/svg-sprite-sheet.mjs";
import injectWhyDidYouRender from "./scripts/why-did-you-render/index.js";

const withNextIntl = createNextIntlPlugin("./src/i18n/index.ts");
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const customBuildId = crypto.randomBytes(16).toString("hex");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  generateBuildId: () => customBuildId,
  env: {
    NEXT_PUBLIC_CUSTOM_BUILD_ID: customBuildId,
  },
  webpack: (config, context) => {
    injectToWebpackConfig(config, context.buildId);

    if (process.env.WDYR_ENABLED === "true" && context.dev) {
      injectWhyDidYouRender(config, context);
    }

    return config;
  },
};

const plugins = [withBundleAnalyzer, withNextIntl];

export default withPlugins(plugins, nextConfig);
