import { defineTokens } from "@pandacss/dev";

export const durations = defineTokens.durations({
  fast: { value: "100ms" },
  normal: { value: "250ms" },
  slow: { value: "400ms" },
});
