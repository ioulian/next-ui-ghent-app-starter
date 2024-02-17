// @ts-check

import { resolve } from "path";

import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";
import SpriteLoaderPlugin from "svg-sprite-loader/plugin.js";

const withNextIntl = createNextIntlPlugin();
const withVanillaExtract = createVanillaExtractPlugin();
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test && rule.test.test(".svg"),
    );
    fileLoaderRule.exclude = [/\@tabler\/icons\//, /-sprite\.svg$/];
    config.module.rules.push({
      test(path) {
        return path.indexOf("@tabler/icons") !== -1 || path.indexOf("-sprite.svg") !== -1;
      },
      use: [
        { loader: "svg-sprite-loader", options: { extract: true, publicPath: "/static/media/" } },
        "svgo-loader",
      ],
      include: [resolve("node_modules/@tabler/icons"), resolve("src"), resolve("public")],
    });
    config.plugins.push(new SpriteLoaderPlugin());

    return config;
  },
};

export default withPlugins([withBundleAnalyzer, withNextIntl, withVanillaExtract], nextConfig);
