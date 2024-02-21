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
} from "react-hook-form";
import merge from "lodash/merge";
import { useTranslations } from "next-intl";
import clsx from "clsx";

import { InferComponentProps } from "@/types/component";

import Description from "../description/Description";
import Error from "../error/Error";
import Label from "../label/Label";
import { getAriaDescribedBy, getDescriptionId, getErrorId } from "../utils";
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
    id: string;
  };
}) => ReactElement;

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
  className,
  ...props
}: {
  isToggle?: boolean;
  asFieldSet?: boolean;
  options?: RegisterOptions<T, FieldPath<T>>;
  name: Path<T>;
  label?: ReactNode;
  description?: ReactNode;
  inputWrapper?: FC<PropsWithChildren>;
  // FIXME:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watchValidate?: any;
  children?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ReactElement<any, JSXElementConstructor<any>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ReactElement<any, JSXElementConstructor<any>>[]
    | RenderProps<T>;
} & Omit<InferComponentProps<"div" | "fieldset">, "children">) => {
  const { register, unregister, watch, control, formState, getFieldState } = useFormContext<T>();
  const t = useTranslations("common.form");

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, [unregister, name]);

  const { error } = getFieldState(name, formState);
  const registerProps = register(name, merge(options, watchValidate ? watchValidate(watch) : {}));
  const describedBy = getAriaDescribedBy(name, !!description, !!error);

  const Component = asFieldSet ? "fieldset" : "div";

  return (
    // @ts-expect-error TODO: fixme
    <Component {...props} className={clsx(formField, isToggle && formFieldToggle, className)}>
      {!!label && (
        <Label
          as={asFieldSet ? "legend" : "label"}
          htmlFor={asFieldSet ? undefined : name}
          required={!!options?.required}
        >
          {label}
        </Label>
      )}
      {typeof children === "function" ? (
        <InputWrapper>
          <Controller
            control={control}
            {...{ name, options }}
            render={(args) => {
              return children({
                ...args,
                props: {
                  id: name,
                  // @ts-expect-error FIXME:
                  isError: !!error,
                  ...(describedBy && { "aria-describedby": describedBy }),
                  ...(error && { "aria-invalid": "true" }),
                },
              });
            }}
          />
        </InputWrapper>
      ) : (
        <InputWrapper>
          {Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, {
                  ...child.props,
                  ...registerProps,
                  isError: !!error,
                  name,
                  id: name,
                  ...(describedBy && { "aria-describedby": describedBy }),
                  ...(error && { "aria-invalid": "true" }),
                })
              : null,
          )}
        </InputWrapper>
      )}
      {error ? (
        <Error id={getErrorId(name)}>
          {error.type === BE_VALIDATION
            ? (error.message as unknown as string)
            : t(`validationErrors.${error.message as string}`)}
        </Error>
      ) : null}
      {description ? <Description id={getDescriptionId(name)}>{description}</Description> : null}
    </Component>
  );
};

if (process.env.NODE_ENV === "development") {
  FormField.whyDidYouRender = true;
}

export default FormField;
