import { defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  current: { value: "currentColor" },
  white: { value: "#fff" },
  black: { value: "#000" },
  primary: {
    400: { value: "#2e40ea" },
    500: { value: "#0017ee" },
    600: { value: "#1020b2" },
  },
  body: { value: "#3C4346" },
});
