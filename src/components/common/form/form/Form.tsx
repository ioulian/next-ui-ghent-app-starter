import { useEffect } from "react";
import { DeepPartial, DefaultValues, FormProvider, Mode, Path, useForm } from "react-hook-form";
import clsx from "clsx";

import { ApiError } from "@/components/common/form/types";
import { InferComponentProps } from "@/types/component";

import ApiFormError from "../ApiFormError";

import { form } from "./Form.styles.css";

export const BE_VALIDATION: string = "BE";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormValueType = Record<string, any>;

// TODO: find a way to pass type to children, maybe use a function that we pass
// to form, from wich every child can get it types?
const Form = <T extends FormValueType>({
  isLoading,
  error,
  defaultValues,
  onSubmit,
  onChange,
  children,
  mode = "onChange",
  className,
  ...props
}: {
  error?: ApiError;
  defaultValues?: DefaultValues<T>;
  isLoading?: boolean;
  mode?: Mode;
  onSubmit: (data?: T) => void;
  onChange?: (data?: DeepPartial<T> | T) => void;
} & Omit<InferComponentProps<"form">, "onChange" | "onSubmit">) => {
  const methods = useForm<T>({
    defaultValues,
    mode,
  });
  const { handleSubmit, getValues, setError, clearErrors, watch, setFocus, reset } = methods;

  // Trigger onChange first time
  useEffect(() => {
    onChange?.(getValues());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Subscribe to onChange event
  useEffect(() => {
    const subscription = watch((values) => {
      onChange?.(values);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, onChange]);

  // Show errors and set focus to first error field
  useEffect(() => {
    if (error) {
      error.violations?.forEach(({ propertyPath, message }, i) => {
        setTimeout(() => {
          setError(propertyPath as Path<T>, {
            type: BE_VALIDATION,
            message,
          });
        }, 0);

        if (i === 0) {
          try {
            // Can fail on HMR
            setFocus(propertyPath as Path<T>);
          } catch (e) {}
        }
      });
    } else {
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  // Update form when defaultValues change
  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(defaultValues)]);

  return (
    <FormProvider {...methods}>
      <form
        {...props}
        className={clsx(form, className)}
        onSubmit={!isLoading ? handleSubmit(onSubmit) : () => {}}
      >
        {error ? <ApiFormError error={error} /> : null}
        {children}
      </form>
    </FormProvider>
  );
};
if (process.env.NODE_ENV === "development") {
  Form.whyDidYouRender = true;
}

export default Form;
