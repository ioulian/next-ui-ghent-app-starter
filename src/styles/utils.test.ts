/* eslint-disable i18next/no-literal-string */

import { convertThemeVarToNumber } from "@/styles/utils";

describe("utils", () => {
  it("converts theme var to number", () => {
    expect(convertThemeVarToNumber(5)).toEqual(5);
    expect(convertThemeVarToNumber("5")).toEqual(5);
    expect(convertThemeVarToNumber("5px")).toEqual(5);
    expect(convertThemeVarToNumber("5rem")).toEqual(5);
    expect(convertThemeVarToNumber("5ms")).toEqual(5);
  });
});
