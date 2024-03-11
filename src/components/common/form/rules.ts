import { FieldPath, FieldValues, UseFormWatch } from "react-hook-form";

export const required = {
  required: {
    value: true,
    message: "required",
  },
};

export const email = {
  pattern: {
    value: /^\S+@\S+$/,
    message: "email",
  },
};

export const password = {
  pattern: {
    value: /(?=^.{9,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/,
    message: "password",
  },
};

// FIXME:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const passwordRepeat =
  <T extends FieldValues>(otherField: FieldPath<T>) =>
  (watch: UseFormWatch<T>) => ({
    validate: (val: FieldPath<T>) => {
      if (watch(otherField) !== val) {
        return "passwordMatch";
      }
    },
  });
