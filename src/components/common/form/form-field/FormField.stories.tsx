import type { Meta, StoryObj } from "@storybook/react";
import ReactSelect from "react-select";
import icon from "@tabler/icons/at.svg";
import searchIcon from "@tabler/icons/search.svg";
import { DateRange, DayPicker, Matcher } from "react-day-picker";

/* eslint-disable i18next/no-literal-string */

import { colourOptions } from "@/components/common/form/form-field/FormField.data";
import ReactDayPickerContainer from "@/components/common/form/react-day-picker/ReactDayPickerContainer";

import { email, required } from "../rules";
import Form from "../form/Form";
import Select from "../select/Select";
import TextArea from "../textarea/TextArea";
import SingleCheckbox from "../single-checkbox/SingleCheckbox";
import Radio from "../collection/radio/Radio";
import List from "../collection/List";
import Checkbox from "../collection/checkbox/Checkbox";
import SvgSprite from "../../svg-sprite/SvgSprite";
import Toggle from "../toggle/Toggle";
import PasswordInput from "../input/PasswordInput";
import ReactSelectContainer from "../react-select/ReactSelectContainer";
import Input from "../input/Input";

import FormField from "./FormField";

const ExampleApiError = {
  type: "https://tools.ietf.org/html/rfc2616#section-10",
  title: "An error occurred",
  message: "emailAddress: This value is not a valid email address.",
  error_code: "emailAddress: This value is not a valid email address.",
  violations: [
    {
      propertyPath: "emailAddress",
      message: "This value is not a valid email address.",
      code: "bd79c0ab-ddba-46cc-a703-a7a4b08de310",
    },
  ],
};

const meta: Meta<typeof FormField> = {
  title: "UI/Form/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  render: (args) => (
    <Form onSubmit={() => {}} error={ExampleApiError}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Email Address",
    name: "emailAddress",
    options: {
      ...required,
      ...email,
    },
    description: "Description",
    children: <Input iconBefore={<SvgSprite src={icon} />} />,
  },
};

export const WithSearch: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Search",
    name: "search",
    children: <Input type="search" iconBefore={<SvgSprite src={searchIcon} />} />,
  },
};

export const WithPassword: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Password",
    name: "password",
    children: <PasswordInput />,
  },
};

export const WithSelect: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Role",
    name: "emailAddress",
    options: {
      ...required,
    },
    description: "Description",
    children: (
      <Select addEmptyOption>
        <optgroup label="Swedish Cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </optgroup>
      </Select>
    ),
  },
};

export const WithDate: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Date",
    name: "date",
    options: {
      ...required,
    },
    description: "Description",
    children: <Input type="date" />,
  },
};

export const WithDateTime: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Date and time",
    name: "date",
    options: {
      ...required,
    },
    description: "Description",
    children: <Input type="datetime-local" />,
  },
};

export const WithTextarea: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Textarea",
    name: "emailAddress",
    options: {
      ...required,
    },
    description: "Description",
    children: <TextArea />,
  },
};

export const WithSingleCheckbox: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "I accept privacy policy",
    name: "emailAddress",
    isToggle: true,
    options: {
      ...required,
    },
    children: <SingleCheckbox />,
  },
};

export const WithToggle: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "I accept privacy policy",
    name: "emailAddress",
    isToggle: true,
    options: {
      ...required,
    },
    children: <Toggle />,
  },
};

export const WithRadioList: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args}>
        <Radio inputValue="value1">Value 1</Radio>
        <Radio inputValue="value2">Value 2</Radio>
        <Radio inputValue="value3">Value 3</Radio>
      </FormField>
    </Form>
  ),
  args: {
    label: "Choose one",
    name: "emailAddress",
    options: {
      ...required,
    },
    inputWrapper: List,
    asFieldSet: true,
  },
};

export const WithCheckboxList: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args}>
        <Checkbox inputValue="value1">Value 1</Checkbox>
        <Checkbox inputValue="value2">Value 2</Checkbox>
        <Checkbox inputValue="value3">Value 3</Checkbox>
      </FormField>
    </Form>
  ),
  args: {
    label: "Choose one",
    name: "emailAddress",
    options: {
      ...required,
    },
    inputWrapper: List,
    asFieldSet: true,
  },
};

export const WithReactSelect: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Choose",
    name: "emailAddress",
    inputWrapper: ReactSelectContainer,
    options: {
      ...required,
    },
    asFieldSet: true,
    children: ({ field, props: { id, ...props } }) => (
      <ReactSelect
        {...field}
        {...props}
        inputId={id}
        isClearable
        defaultValue={colourOptions[0]}
        className="react-select"
        classNamePrefix="react-select"
        options={colourOptions}
      />
    ),
  },
};

export const WithMultiReactSelect: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Choose",
    name: "emailAddress",
    inputWrapper: ReactSelectContainer,
    options: {
      ...required,
    },
    asFieldSet: true,
    children: ({ field, props: { id, ...props } }) => (
      <ReactSelect
        {...field}
        {...props}
        isMulti
        inputId={id}
        defaultValue={colourOptions[0]}
        className="react-select"
        menuIsOpen
        classNamePrefix="react-select"
        options={colourOptions}
      />
    ),
  },
};

export const WithReactDayPicker: Story = {
  render: (args) => (
    <Form<{ inputName: Matcher | Matcher[] }> onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Choose",
    name: "inputName",
    inputWrapper: ReactDayPickerContainer,
    options: {
      ...required,
    },
    children: ({ field: { onChange, value, ...field }, props: { ...props } }) => {
      return (
        <DayPicker
          {...field}
          {...props}
          mode="single"
          fromYear={2020}
          toYear={new Date().getFullYear()}
          selected={value as Date}
          onSelect={onChange}
        />
      );
    },
  },
};

export const WithReactDateRangePicker: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Choose",
    name: "emailAddress",
    inputWrapper: ReactDayPickerContainer,
    options: {
      ...required,
    },
    children: ({ field: { onChange, value, ...field }, props: { ...props } }) => {
      return (
        <DayPicker
          {...field}
          {...props}
          mode="range"
          captionLayout="dropdown-buttons"
          fromYear={2020}
          toYear={new Date().getFullYear()}
          selected={value as DateRange}
          onSelect={onChange}
        />
      );
    },
  },
};
