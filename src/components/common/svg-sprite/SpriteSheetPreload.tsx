import { FC, memo } from "react";

import { hasSpriteSheet } from "@/components/common/svg-sprite/utils-server";

import { getSpritesheetUrl } from "./utils";

// TODO: this is probably not needed as it doesn't work when you are using <svg><use> directive (see: Sec-Fetch-Mode)
const SpriteSheetPreload: FC = () => {
  if (!hasSpriteSheet()) {
    return null;
  }

  return (
    <link
      rel="preload"
      href={getSpritesheetUrl()}
      type="image/svg+xml"
      crossOrigin="use-credentials"
      as="image"
    />
  );
};

export default memo(SpriteSheetPreload);
