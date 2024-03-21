/* eslint-disable i18next/no-literal-string */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Form from "../form/Form";
import Input from "../input/Input";

import FormField from "./FormField";

describe("FormField", () => {
  it("renders", () => {
    render(
      <Form>
        <FormField data-testid="test" name="test" />
      </Form>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("renders with custom class", () => {
    render(
      <Form>
        <FormField data-testid="test" className="test" name="test" />
      </Form>,
    );
    expect(screen.getByTestId("test")).toHaveClass("test");
  });

  it("renders with custom prop", () => {
    render(
      <Form>
        <FormField data-testid="test" data-foo="bar" name="test" />
      </Form>,
    );
    expect(screen.getByTestId("test")).toHaveAttribute("data-foo", "bar");
  });

  it("renders with label", () => {
    render(
      <Form>
        <FormField label="test" name="test" />
      </Form>,
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("renders inputfield with correct values", async () => {
    render(
      <Form defaultValues={{ "test-name": "test-value" }}>
        <FormField name="test-name" description="test-description">
          <Input data-testid="test" />
        </FormField>
      </Form>,
    );

    expect(screen.getByTestId("test")).toHaveAttribute("name", "test-name");
    expect(screen.getByTestId<HTMLInputElement>("test").value).toBe("test-value");
    expect(screen.getByTestId<HTMLInputElement>("test").value).toBe("test-value");
    expect(screen.queryByText("test-description")).toBeInTheDocument();
  });

  it("renders custom render function", async () => {
    render(
      <Form defaultValues={{ "test-name": "test-value" }}>
        <FormField name="test-name" description="test-description">
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ({ field, props: { isError, ...props } }) => (
              <span data-testid="test" {...field} {...props} />
            )
          }
        </FormField>
      </Form>,
    );

    expect(screen.getByTestId("test")).toHaveAttribute("name", "test-name");
  });
});
