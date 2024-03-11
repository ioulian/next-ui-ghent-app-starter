"use client";

import { useEffect } from "react";
import { DeepPartial, DefaultValues, FormProvider, Mode, Path, useForm } from "react-hook-form";

import { ApiError } from "@/components/common/form/types";
import { InferComponentProps } from "@/types/component";
import { cx } from "@/styled-system/css";

import ApiFormError from "../ApiFormError";

import { form } from "./Form.styles";

export const BE_VALIDATION: string = "BE";

export type FormValueType = Record<string, unknown>;

/**
 * Wrapper around `react-hook-form`.
 *
 * TODO: find a way to pass type to children, maybe use a function that we pass
 * to form, from wich every child can get it types?
 */
const Form = <T extends FormValueType>({
  /**
   * Is current form loading, will not trigger onSubmit when loading
   */
  isLoading,

  /**
   * Error to show above the form
   */
  error,

  /**
   * Values to preset the form with
   */
  defaultValues,

  /**
   * Triggered on form submit
   */
  onSubmit,

  /**
   * Triggered on change of any field
   */
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
        className={cx(form, className)}
        onSubmit={!isLoading ? handleSubmit(onSubmit) : () => {}}
      >
        {error ? <ApiFormError error={error} /> : null}
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
