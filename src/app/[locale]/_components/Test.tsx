"use client";

/* eslint-disable i18next/no-literal-string */
import { FC, useCallback } from "react";

import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import Button from "@/components/common/button/Button";
import { Link } from "@/i18n/navigation";
import Form from "@/components/common/form/form/Form";
import Heading from "@/components/common/heading/Heading";
import FormField from "@/components/common/form/form-field/FormField";
import { email, passwordRepeat, required } from "@/components/common/form/rules";
import Input from "@/components/common/form/input/Input";
import Checkbox from "@/components/common/form/collection/checkbox/Checkbox";
import SingleCheckbox from "@/components/common/form/single-checkbox/SingleCheckbox";
import List from "@/components/common/form/collection/List";
import PasswordInput from "@/components/common/form/input/PasswordInput";
import { success } from "@/components/common/toast/notify";
import LinkButton from "@/components/common/link-button/LinkButton";
import RichText from "@/components/common/form/rich-text/RichText";

type SampleFormData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  hobbies: string[];
  password: string;
  passwordRepeat: string;
  privacy: string;
  content: string;
};

const Test: FC = () => {
  const testToast = useCallback(() => {
    success("Toastify loaded dynamically!");
  }, []);

  const onSubmit = useCallback((data: SampleFormData | undefined) => {
    console.log(data);
  }, []);

  return (
    <div>
      <Button onClick={testToast}>Test toast</Button>
      <Breadcrumb>
        <LinkButton href="/" as={Link} variant="simple" size="base">
          Home
        </LinkButton>
        <LinkButton href="/" as={Link} variant="simple" size="base">
          Parent 1
        </LinkButton>
        <LinkButton href="/" as={Link} variant="simple" size="base">
          Parent 2
        </LinkButton>
        <LinkButton href="/" as={Link} variant="simple" size="base">
          Current
        </LinkButton>
      </Breadcrumb>

      <Form<SampleFormData>
        noValidate
        defaultValues={{ content: "<p>Test</p>" }}
        onSubmit={onSubmit}
      >
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
          label="Hobbies"
          name="hobbies"
          asFieldSet
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
            description="At least 9 chars, lowercase, uppercase, special char and number"
            options={{}}
          >
            <PasswordInput />
          </FormField>
          <FormField<SampleFormData>
            style={{
              flexGrow: 1,
            }}
            label="Repeat password"
            name="passwordRepeat"
            watchValidate={passwordRepeat("password")}
          >
            <Input type="password" />
          </FormField>
        </div>
        <FormField<SampleFormData> name="content" label="Text">
          {({ field: { onChange, value, ...field }, props: { ...props } }) => {
            return (
              <RichText
                {...field}
                {...props}
                content={value as string}
                onBlur={(editor) => {
                  onChange(editor.editor.getHTML());
                }}
              />
            );
          }}
        </FormField>
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
    </div>
  );
};

export default Test;
