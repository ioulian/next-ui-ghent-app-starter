// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @typedef {Parameters<import('next').NextConfig['webpack']>[1]} WebpackConfigContext */

const injectionSource = path.join(__dirname, "injection.ts");

/**
 * @param {import('webpack').Configuration} config
 * @param {WebpackConfigContext} context
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (config, context) => {
  if (context.dev && !context.isServer) {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main-app"] && !entries["main-app"].includes(injectionSource)) {
        entries["main-app"].unshift(injectionSource);
      }

      return entries;
    };
  }
};
