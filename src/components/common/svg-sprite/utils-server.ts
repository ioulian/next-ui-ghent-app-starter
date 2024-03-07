import fs from "fs";

import { getBuildId } from "@/utils/next";

/**
 * Will check if svg spritesheet exists
 */
export const hasSpriteSheet = () => {
  const fileUrl = `${process.cwd()}/.next/static/media/sprite-${getBuildId()}.svg`;

  if (!fs.existsSync(fileUrl)) {
    return false;
  }

  const file = fs.readFileSync(fileUrl, "utf8");

  return file && typeof file === "string" && file.trim() !== "";
};
