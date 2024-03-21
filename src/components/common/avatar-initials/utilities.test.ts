/* eslint-disable i18next/no-literal-string */

import { getAvatarInitials } from "./utilities";

describe("utilities", () => {
  it("generates a correct svg", () => {
    const value = getAvatarInitials("TE");
    expect(value).toMatchSnapshot();
  });
});
