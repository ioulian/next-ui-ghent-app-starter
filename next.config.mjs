// @ts-check

import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin();
const withVanillaExtract = createVanillaExtractPlugin();
const withWintBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
};

export default withPlugins([withWintBundleAnalyzer, withNextIntl, withVanillaExtract], nextConfig);
