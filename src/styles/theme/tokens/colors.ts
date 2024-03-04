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
  form: {
    input: {
      color: { value: "{colors.body}" },
      border: { value: "{colors.body}" },
      background: { value: "rgba(239, 242, 243, 0.2)" },
    },
    select: {
      indicator: { value: "{colors.body}" },
    },
    asterisk: {
      value: "#b30000",
    },
    outline: {
      value: "{colors.body}",
    },
    checkbox: {
      checked: {
        border: { value: "{colors.primary.500}" },
        background: { value: "{colors.primary.500}" },
        color: { value: "#fff" },
      },
    },
    error: {
      value: "#b30000",
    },
    requiredMessage: {
      value: "{colors.form.error}",
    },
  },
});
