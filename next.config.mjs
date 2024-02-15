import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withNextIntl = createNextIntlPlugin();
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins([withNextIntl, withVanillaExtract], nextConfig);
