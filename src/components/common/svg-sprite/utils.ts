import { getBuildId } from "@/utils/next";

export const getSpritesheetUrl = () =>
  `${__webpack_public_path__}static/media/sprite-${getBuildId()}.svg`;
