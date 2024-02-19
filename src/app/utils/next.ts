import fs from "fs";

import { BUILD_ID_FILE } from "next/dist/shared/lib/constants";

export const getBuildId = (): string | "development" => {
  const fileUrl = `${process.cwd()}/.next/${BUILD_ID_FILE}`;

  if (!fs.existsSync(fileUrl)) {
    return "development";
  }

  const file = fs.readFileSync(fileUrl, "utf8");

  if (file && typeof file === "string" && file.trim() !== "") {
    return file;
  }

  return "development";
};
