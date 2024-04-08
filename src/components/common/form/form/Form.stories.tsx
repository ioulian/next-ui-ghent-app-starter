/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ReactSelect from "react-select";

import { exampleApiError } from "@/components/common/form/form/Form.data";

import { ColourOption, colourOptions } from "../form-field/FormField.data";
import { email, password, passwordRepeat, required } from "../rules";
import Form from "../form/Form";
import SingleCheckbox from "../single-checkbox/SingleCheckbox";
import List from "../collection/List";
import Checkbox from "../collection/checkbox/Checkbox";
import Heading from "../../heading/Heading";
import Button from "../../button/Button";
import PasswordInput from "../input/PasswordInput";
import ReactSelectContainer from "../react-select/ReactSelectContainer";

import Input from "./../input/Input";
import FormField from "./../form-field/FormField";

const meta: Meta<typeof Form> = {
  title: "UI/Form/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

type SampleFormData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  hobbies: string[];
  color: ColourOption;
  password: string;
  passwordRepeat: string;
  privacy: string;
};

export const Example: Story = {
  render: (args) => (
    <Form<SampleFormData> {...args} defaultValues={{}} onSubmit={action("onSubmit")}>
      <Heading>Register here</Heading>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1.25rem",
        }}
      >
        <FormField<SampleFormData>
          style={{
            flexGrow: 1,
          }}
          label="First name"
          name="firstName"
          options={{
            required,
          }}
        >
          <Input />
        </FormField>
        <FormField<SampleFormData>
          style={{
            flexGrow: 1,
          }}
          label="Last name"
          name="lastName"
          options={{
            required,
          }}
        >
          <Input />
        </FormField>
      </div>
      <FormField<SampleFormData>
        label="Email address"
        name="emailAddress"
        options={{
          required,
          pattern: email,
        }}
      >
        <Input type="email" />
      </FormField>
      <FormField<SampleFormData>
        label="Favorite color"
        name="color"
        inputWrapper={ReactSelectContainer}
        options={{
          required,
        }}
      >
        {({ field, props: { id, ...props } }) => {
          return (
            <ReactSelect
              {...field}
              {...props}
              inputId={id}
              className="react-select"
              classNamePrefix="react-select"
              options={colourOptions}
            />
          );
        }}
      </FormField>
      <FormField<SampleFormData>
        label="Hobbies"
        name="hobbies"
        inputWrapper={List}
        options={{
          required,
        }}
      >
        <Checkbox key="1" inputValue="value1">
          Value 1
        </Checkbox>
        <Checkbox key="2" inputValue="value2">
          Value 2
        </Checkbox>
        <Checkbox key="3" inputValue="value3">
          Value 3
        </Checkbox>
      </FormField>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1.25rem",
        }}
      >
        <FormField<SampleFormData>
          style={{
            flexGrow: 1,
          }}
          label="Password"
          name="password"
          description="At least 8 chars, lowercase, uppercase, special char and number"
          options={{
            pattern: password,
          }}
        >
          <PasswordInput />
        </FormField>
        <FormField<SampleFormData>
          style={{
            flexGrow: 1,
          }}
          label="Repeat password"
          name="passwordRepeat"
          watchValidate={passwordRepeat<SampleFormData>("password")}
        >
          <Input type="password" />
        </FormField>
      </div>
      <FormField<SampleFormData>
        label="I accept privacy policy"
        description="Read terms and conditions first"
        name="privacy"
        isToggle
        options={{
          required,
        }}
      >
        <SingleCheckbox />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  ),
  args: {
    error: exampleApiError,
  },
};
