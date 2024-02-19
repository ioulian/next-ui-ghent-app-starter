import { FC, memo } from "react";

import { getSpritesheetUrl, hasSpriteSheet } from "./utils";

const SpriteSheetPreload: FC = () => {
  if (!hasSpriteSheet()) {
    return null;
  }

  return <link rel="preload" href={getSpritesheetUrl()} as="image" />;
};

export default memo(SpriteSheetPreload);
