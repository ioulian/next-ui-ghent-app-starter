import { FC, memo } from "react";

import { css } from "@/styled-system/css";

import { getSpriteSheet } from "./utils-server";

const SpriteSheetInline: FC = () => {
  const spritesheet = getSpriteSheet();

  if (spritesheet === false) {
    return null;
  }

  return (
    <div
      className={css({ position: "absolute", width: 0, height: 0 })}
      aria-hidden
      dangerouslySetInnerHTML={{
        // This is a bit of a hack, but we need plugin running in extract mode
        // But this will create symbols in defs with usages. We can disable usages
        // but the symbols will still be in defs. We just remove it like that
        __html: spritesheet.replaceAll("<defs>", "").replaceAll("</defs>", ""),
      }}
    />
  );
};

/**
 * Will render Spritesheet
 */
export default memo(SpriteSheetInline);
