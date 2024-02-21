import fs from "fs";

import { getBuildId } from "@/utils/next";

export const getSpritesheetUrl = () =>
  // @ts-expect-error FIXME:
  `${__webpack_public_path__}static/media/sprite-${getBuildId()}.svg`;

export const hasSpriteSheet = () => {
  const fileUrl = `${process.cwd()}/.next/static/media/sprite-${getBuildId()}.svg`;

  if (!fs.existsSync(fileUrl)) {
    return false;
  }

  const file = fs.readFileSync(fileUrl, "utf8");

  return file && typeof file === "string" && file.trim() !== "";
};
