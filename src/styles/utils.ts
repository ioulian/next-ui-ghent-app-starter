export const convertThemeVarToNumber = (variable: string): number =>
  parseInt(variable.replace("px", "").replace("rem", "").replace("ms", ""), 10);
