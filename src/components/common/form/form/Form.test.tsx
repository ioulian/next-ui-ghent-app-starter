/* eslint-disable i18next/no-literal-string */

import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@storybook/test";

import { exampleApiError } from "@/components/common/form/form/Form.data";

import Input from "../input/Input";
import FormField from "../form-field/FormField";

import { required } from "./../rules";
import Form from "./Form";

describe("Form", () => {
  it("renders", () => {
    render(<Form data-testid="test" />);
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("renders with custom class", () => {
    render(<Form data-testid="test" className="test" />);
    expect(screen.getByTestId("test")).toHaveClass("test");
  });

  it("renders with custom prop", () => {
    render(<Form data-testid="test" data-foo="bar" />);
    expect(screen.getByTestId("test")).toHaveAttribute("data-foo", "bar");
  });

  it("will handle form flow", async () => {
    const spy = jest.fn();
    render(
      <Form onSubmit={spy} data-testid="test">
        <FormField name="test-name" options={{ ...required }} description="test">
          <Input />
        </FormField>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </Form>,
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await act(async () => {
      await fireEvent.click(button);
    });
    expect(spy).not.toHaveBeenCalled();
    expect(input).toHaveFocus();
    expect(input).toHaveAttribute("aria-describedby");
    expect(input).toHaveAttribute("aria-invalid");
    expect(
      document.getElementById(input.getAttribute("aria-describedby")!.split(" ")[0]),
    ).toBeInTheDocument();
    expect(
      document.getElementById(input.getAttribute("aria-describedby")!.split(" ")[1]),
    ).toBeInTheDocument();

    await act(async () => {
      await userEvent.type(input, "test");
      await fireEvent.click(button);
    });

    expect(spy).toHaveBeenCalled();
  });

  it("will handle form custom errors", async () => {
    const spy = jest.fn();
    render(
      <Form onSubmit={spy} data-testid="test" error={exampleApiError}>
        <FormField name="emailAddress">
          <Input />
        </FormField>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </Form>,
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await act(async () => {
      await fireEvent.click(button);
    });

    expect(input).toHaveFocus();
    expect(input).toHaveAttribute("aria-describedby");
    expect(document.getElementById(input.getAttribute("aria-describedby")!)).toBeInTheDocument();
  });

  it("triggers onChange", async () => {
    const spy = jest.fn((data) => data.emailAddress);
    render(
      <Form data-testid="test" onChange={spy}>
        <FormField name="emailAddress">
          <Input />
        </FormField>
      </Form>,
    );

    const input = screen.getByRole("textbox");

    await act(async () => {
      await userEvent.type(input, "test");
    });

    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls).toHaveLength(6);
    expect(spy.mock.results[5].value).toBe("test");
  });

  it("should not trigger onSubmit when loading", async () => {
    const spy = jest.fn();
    render(
      <Form onSubmit={spy} data-testid="test" isLoading>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </Form>,
    );

    const button = screen.getByRole("button");

    await act(async () => {
      try {
        await fireEvent.click(button);
      } catch (e) {}
    });

    expect(spy).not.toHaveBeenCalled();
  });
});
