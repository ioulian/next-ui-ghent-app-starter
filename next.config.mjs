import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins([withNextIntl], nextConfig);
