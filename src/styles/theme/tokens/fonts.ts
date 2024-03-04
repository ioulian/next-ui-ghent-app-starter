import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  body: { value: "system-ui, sans-serif" },
  heading: { value: "var(--font-heading), sans-serif" },
});
