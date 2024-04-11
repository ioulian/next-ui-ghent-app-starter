/* eslint-disable i18next/no-literal-string */

import { getContentTypeHeaders, injectHeaders } from "@/services/api.service";

describe("api.service", () => {
  it("injectHeaders works correctly", () => {
    expect(injectHeaders({ Authorization: "1" })).toMatchSnapshot();
    expect(injectHeaders({ Authorization: "1" }, { headers: {} })).toMatchSnapshot();
    expect(
      injectHeaders({ Authorization: "1" }, { headers: { "Content-Type": "application/json" } }),
    ).toMatchSnapshot();
    expect(
      injectHeaders({ Authorization: "1" }, { headers: { Authorization: "none" } }),
    ).toMatchSnapshot();
  });

  it("getContentTypeHeaders works correctly", () => {
    expect(getContentTypeHeaders()).toMatchSnapshot();
  });
});
