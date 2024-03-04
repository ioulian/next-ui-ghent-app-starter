// @ts-check
import crypto from "crypto";

import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";

import { injectToWebpackConfig } from "./scripts/svg-sprite-sheet.mjs";

const withNextIntl = createNextIntlPlugin("./src/i18n/index.ts");
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const customBuildId = crypto.randomBytes(16).toString("hex");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  generateBuildId: () => {
    return customBuildId;
  },
  env: {
    NEXT_PUBLIC_CUSTOM_BUILD_ID: customBuildId,
  },
  webpack: (config, { buildId }) => {
    injectToWebpackConfig(config, buildId);

    return config;
  },
};

const plugins = [withBundleAnalyzer, withNextIntl];

if (process.env.SERVICE_WORKER_ENABLED === "true") {
  plugins.push(withSerwist);
}

export default withPlugins(plugins, nextConfig);
