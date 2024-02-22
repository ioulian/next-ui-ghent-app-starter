import { defineTokens } from "@pandacss/dev";

export const spacing = defineTokens.spacing({
  floating: {
    tooltip: {
      offset: { value: "10px" },
    },
    popover: {
      offset: { value: "10px" },
    },
    dropdown: {
      offset: { value: "10px" },
    },
    floater: {
      shift: { value: "5px" },
      flip: { value: "5px" },
      arrow: {
        size: { value: "10px" },
        padding: { value: "10px" },
      },
    },
  },
});
