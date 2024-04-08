"use client";

import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useId,
} from "react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  Path,
  RegisterOptions,
  useFormContext,
  UseFormStateReturn,
  UseFormWatch,
} from "react-hook-form";
import merge from "lodash/merge";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import Description from "../description/Description";
import Error from "../error/Error";
import Label from "../label/Label";
import { getAriaDescribedBy } from "../utils";
import { BE_VALIDATION, type FormValueType } from "../form/Form";

import { formField, formFieldToggle } from "./FormField.styles";

const BaseWrapper: FC<{ children?: ReactNode }> = ({ children }) => children;

type RenderProps<T extends FormValueType> = (props: {
  field: ControllerRenderProps<T, FieldPath<T>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
  props: {
    "aria-describedby"?: string;
    "aria-invalid"?: "false" | "true";
    isError?: boolean;
    id: string;
  };
}) => ReactElement;

type FormFieldProps<T extends FormValueType> = {
  /**
   * Render this field as a toggle (toggle or checkbox), meaning it will put the input first and label next on the same line
   */
  isToggle?: boolean;

  /**
   * Setting this option to `true` will render `<fieldset>` as a wrapper, this should be used when using multiple radio buttons or checkboxes
   */
  asFieldSet?: boolean;

  /**
   * Options to pass to react-hook-form
   */
  options?: RegisterOptions<T, FieldPath<T>>;

  /**
   * Name of the input field inside. Will inject it into children
   */
  name: Path<T>;

  /**
   * Label of the form field
   */
  label?: ReactNode;

  /**
   * Description of the form field
   */
  description?: ReactNode;

  /**
   * Renders a wrapper around input field, useful if you want more control of the styling of the input (third party libraries, multi-radio/checkboxes)
   */
  inputWrapper?: FC<PropsWithChildren>;

  /**
   * Provide a function to watch another field for value changes
   */
  watchValidate?: (watch: UseFormWatch<T>) => {
    validate: (val: FieldPath<T>) => string | undefined;
  };

  /**
   * Normal children or render function (use this for third party components, or if you want more control of the data flow)
   */
  children?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ReactElement<any, JSXElementConstructor<any>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ReactElement<any, JSXElementConstructor<any>>[]
    | RenderProps<T>;
} & Omit<InferComponentProps<"div" | "fieldset">, "children">;

/**
 * Wrapper for a formfield that will handle injection of required properties to children (input, select, ...).
 *
 * The wrapper also adds correct label, description and error messages for the current form element.
 */
const FormField = <T extends FormValueType>({
  asFieldSet,
  isToggle,
  name,
  label,
  description,
  inputWrapper: InputWrapper = BaseWrapper,
  options,
  children,
  watchValidate,
  ...props
}: FormFieldProps<T>) => {
  const { register, unregister, watch, control, formState, getFieldState } = useFormContext<T>();
  const t = useTranslations("common.form");
  const descriptionId = useId();
  const errorId = useId();

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, [unregister, name]);

  const { error } = getFieldState(name, formState);
  const registerProps = register(name, merge(options, watchValidate ? watchValidate(watch) : {}));
  const describedBy = getAriaDescribedBy(!!error && errorId, !!description && descriptionId);

  const Component = asFieldSet ? "fieldset" : "div";

  const sharedProps = {
    id: name,
    isError: !!error,
    ...(describedBy && { "aria-describedby": describedBy }),
    "aria-invalid": !!error ? ("true" as const) : undefined,
  };

  return (
    // @ts-expect-error TODO: fixme
    <Component {...addClassNameToProps(props, formField, isToggle && formFieldToggle)}>
      {!!label && (
        <Label
          as={asFieldSet ? "legend" : "label"}
          htmlFor={asFieldSet ? undefined : name}
          required={!!options?.required}
        >
          {label}
        </Label>
      )}
      <InputWrapper>
        {typeof children === "function" ? (
          <Controller
            control={control}
            {...{ name, options }}
            render={(args) => {
              return children({
                ...args,
                props: {
                  ...sharedProps,
                },
              });
            }}
          />
        ) : (
          <>
            {Children.map(children, (child) =>
              isValidElement(child)
                ? cloneElement(child, {
                    ...child.props,
                    ...registerProps,
                    name,
                    ...sharedProps,
                  })
                : /* c8 ignore next */
                  null,
            )}
          </>
        )}
      </InputWrapper>
      {error ? (
        <Error id={errorId}>
          {error.type === BE_VALIDATION
            ? (error.message as unknown as string)
            : // @ts-expect-error This is dynamic
              t(`validationErrors.${error.message as unknown as string}`)}
        </Error>
      ) : null}
      {description ? <Description id={descriptionId}>{description}</Description> : null}
    </Component>
  );
};

export default FormField;
