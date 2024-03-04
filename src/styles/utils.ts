/**
 * Converts token from panda-css to a usable number.
 */
export const convertThemeVarToNumber = (variable: string | number): number => {
  if (typeof variable === "number") {
    return variable;
  }

  return parseInt(variable.replace("px", "").replace("rem", "").replace("ms", ""), 10);
};
