import { FC, memo } from "react";

import { hasSpriteSheet } from "@/components/common/svg-sprite/utils-server";

import { getSpritesheetUrl } from "./utils";

const SpriteSheetPreload: FC = () => {
  if (!hasSpriteSheet()) {
    return null;
  }

  return <link rel="preload" href={getSpritesheetUrl()} as="image" />;
};

export default memo(SpriteSheetPreload);
