// @ts-check
import crypto from "crypto";

import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";

import { injectToWebpackConfig } from "./scripts/svg-sprite-sheet.mjs";

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const customBuildId = crypto.randomBytes(16).toString("hex");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  generateBuildId: () => {
    return customBuildId;
  },
  env: {
    NEXT_CUSTOM_BUILD_ID: customBuildId,
  },
  webpack: (config, { buildId }) => {
    injectToWebpackConfig(config, buildId);

    return config;
  },
};

export default withPlugins([withBundleAnalyzer, withNextIntl], nextConfig);
