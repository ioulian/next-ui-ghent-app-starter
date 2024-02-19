import { resolve } from "path";

import SpriteLoaderPlugin from "svg-sprite-loader/plugin.js";

export const injectToWebpackConfig = (config, buildId = "development") => {
  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test && rule.test.test(".svg"),
  );
  fileLoaderRule.exclude = [/\@tabler\/icons\//, /-sprite\.svg$/];
  config.module.rules.push({
    test(path) {
      return path.indexOf("@tabler/icons") !== -1 || path.indexOf("-sprite.svg") !== -1;
    },
    use: [
      {
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          publicPath: "/static/media/",
          spriteFilename: (svgPath) => {
            return `sprite-${buildId}${svgPath.substr(-4)}`;
          },
        },
      },
      "svgo-loader",
    ],
    include: [resolve("node_modules/@tabler/icons"), resolve("src"), resolve("public")],
  });
  config.plugins.push(new SpriteLoaderPlugin());
};
