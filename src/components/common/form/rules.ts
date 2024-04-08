import { FieldPath, FieldValues, RegisterOptions, UseFormWatch } from "react-hook-form";

export const required: RegisterOptions["required"] = {
  value: true,
  message: "required",
};

export const email: RegisterOptions["pattern"] = {
  value: /^\S+@\S+$/,
  message: "email",
};

export const password: RegisterOptions["pattern"] = {
  value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
  message: "password",
};

export const passwordRepeat =
  <T extends FieldValues>(otherField: FieldPath<T>) =>
  (watch: UseFormWatch<T>) => ({
    validate: (val: FieldPath<T>) => {
      if (watch(otherField) !== val) {
        return "passwordMatch";
      }
    },
  });
