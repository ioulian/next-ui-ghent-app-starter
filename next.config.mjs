// @ts-check

import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";

import { injectToWebpackConfig } from "./scripts/svg-sprite-sheet.mjs";

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  webpack: (config, { buildId }) => {
    injectToWebpackConfig(config, buildId);

    return config;
  },
};

export default withPlugins([withBundleAnalyzer, withNextIntl], nextConfig);
