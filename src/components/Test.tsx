"use client";

/* eslint-disable i18next/no-literal-string */
import { FC } from "react";
import iconChevron from "@tabler/icons/chevron-right.svg";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import Button from "@/components/common/button/Button";
import { Link } from "@/navigation";
import Dropdown, { DropdownMenuItem } from "@/components/common/floating-ui/dropdown/Dropdown";
import Form from "@/components/common/form/form/Form";
import Heading from "@/components/common/heading/Heading";
import FormField from "@/components/common/form/form-field/FormField";
import { email, passwordRepeat, required } from "@/components/common/form/rules";
import Input from "@/components/common/form/input/Input";
import Checkbox from "@/components/common/form/collection/checkbox/Checkbox";
import SingleCheckbox from "@/components/common/form/single-checkbox/SingleCheckbox";
import List from "@/components/common/form/collection/List";
import PasswordInput from "@/components/common/form/input/PasswordInput";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";

type SampleFormData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  hobbies: string[];
  password: string;
  passwordRepeat: string;
  privacy: string;
};

const Test: FC = () => {
  return (
    <div>
      <Tooltip>
        <Tooltip.Trigger>My trigger</Tooltip.Trigger>
        <Tooltip.Content>My tooltip</Tooltip.Content>
      </Tooltip>
      <Breadcrumb>
        <Button href="/" as={Link} intent="link" size="base">
          Home
        </Button>
        <Button href="/" as={Link} intent="link" size="base">
          Parent 1
        </Button>
        <Button href="/" as={Link} intent="link" size="base">
          Parent 2
        </Button>
        <Button href="/" as={Link} intent="link" size="base">
          Current
        </Button>
      </Breadcrumb>
      <Dropdown trigger={<Button>Open dropdown</Button>}>
        <DropdownMenuItem typeaheadKey="Undo">
          <Button intent="secondary">Undo</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Redo">
          <Button intent="secondary">Redo</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Cut" disabled>
          <Button>Cut</Button>
        </DropdownMenuItem>
        <Dropdown
          trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Copy as</Button>}
          typeaheadKey="Copy as"
        >
          <DropdownMenuItem typeaheadKey="Text">
            <Button>Text</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Video">
            <Button>Video</Button>
          </DropdownMenuItem>
          <Dropdown
            trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Image</Button>}
            typeaheadKey="Image"
          >
            <DropdownMenuItem typeaheadKey=".png">
              <Button>.png</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".jpg">
              <Button>.jpg</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".svg">
              <Button>.svg</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".gif">
              <Button>.gif</Button>
            </DropdownMenuItem>
          </Dropdown>
          <DropdownMenuItem typeaheadKey="Audio">
            <Button>Audio</Button>
          </DropdownMenuItem>
        </Dropdown>
        <Dropdown trigger={<Button>Share</Button>} typeaheadKey="Share">
          <DropdownMenuItem typeaheadKey="Mail">
            <Button>Mail</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Instagram">
            <Button>Instagram</Button>
          </DropdownMenuItem>
        </Dropdown>
      </Dropdown>

      {/* @ts-expect-error will be deleted */}
      <Form<SampleFormData> defaultValues={{}}>
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
              ...required,
            }}
          >
            <Input />
          </FormField>
        </div>
        <FormField<SampleFormData>
          label="Email address"
          name="emailAddress"
          options={{
            ...required,
            ...email,
          }}
        >
          <Input type="email" />
        </FormField>
        <FormField<SampleFormData>
          label="Hobbies"
          name="hobbies"
          inputWrapper={List}
          options={{
            ...required,
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
        <FormField<SampleFormData>
          label="I accept privacy policy"
          description="Read terms and conditions first"
          name="privacy"
          isToggle
          options={{
            ...required,
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
