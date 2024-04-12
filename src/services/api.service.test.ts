/* eslint-disable i18next/no-literal-string */

import { getContentTypeHeaders, injectHeaders, validateData } from "@/services/api.service";

describe("api.service", () => {
  it("tests injectHeaders", () => {
    expect(injectHeaders({ Authorization: "1" })).toMatchSnapshot();
    expect(injectHeaders({ Authorization: "1" }, { headers: {} })).toMatchSnapshot();
    expect(
      injectHeaders({ Authorization: "1" }, { headers: { "Content-Type": "application/json" } }),
    ).toMatchSnapshot();
    expect(
      injectHeaders({ Authorization: "1" }, { headers: { Authorization: "none" } }),
    ).toMatchSnapshot();
  });

  it("tests getContentTypeHeaders", () => {
    expect(getContentTypeHeaders()).toMatchSnapshot();
  });

  it("tests validateData", async () => {
    const validate = validateData(["test"], "Custom Error");
    expect(await validate({ test: "foo" })).toStrictEqual({ test: "foo" });

    expect.assertions(2);
    try {
      await validate({ test2: "foo" });
    } catch (e) {
      expect(e).toBe("Custom Error");
    }
  });
});
