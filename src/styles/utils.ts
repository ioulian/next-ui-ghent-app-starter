import { cx } from "@/styled-system/css";

/**
 * Converts token from panda-css to a usable number.
 */
export const convertThemeVarToNumber = (variable: string | number): number => {
  if (typeof variable === "number") {
    return variable;
  }

  return parseInt(variable.replace("px", "").replace("rem", "").replace("ms", ""), 10);
};

export interface PropsWithClassName {
  className?: string;
}

// From styled-system/css/cx.d.ts
type Argument = string | boolean | null | undefined;

export const addClassNameToProps = <T extends PropsWithClassName>(
  { className, ...props }: T,
  ...newClassName: Argument[]
) => ({
  ...props,
  className: cx(...newClassName, className),
});
