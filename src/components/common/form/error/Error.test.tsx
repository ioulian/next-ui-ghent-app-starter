/* eslint-disable i18next/no-literal-string */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Error from "./Error";

describe("Error", () => {
  it("renders", () => {
    render(<Error id="test" data-testid="test" />);
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("renders with custom class", () => {
    render(<Error id="test" data-testid="test" className="test" />);
    expect(screen.getByTestId("test")).toHaveClass("test");
  });

  it("renders with custom prop", () => {
    render(<Error id="test" data-testid="test" data-foo="bar" />);
    expect(screen.getByTestId("test")).toHaveAttribute("data-foo", "bar");
  });
});
