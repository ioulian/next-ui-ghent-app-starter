// import { lighten } from "polished";

import { globalStyle, style } from "@vanilla-extract/css";

import { defaultTheme, vars } from "@/styles/theme.css";
import { escapeSVG } from "@/utils/svg";
import { description } from "@/components/common/form/description/Description.styles.css";
import { error } from "@/components/common/form/error/Error.styles.css";
import { formFieldError } from "@/components/common/form/form-field/FormField.styles.css";

//import { escapeSVG } from "../../../../utils/svg";

export const reactSelectContainer = style({});

globalStyle(`${reactSelectContainer} .react-select__control`, {
  color: vars.form.input.color,
  backgroundColor: vars.form.input.background,
  borderRadius: vars.borderRadius.normal,
  boxShadow: vars.form.input.shadow,
  border: `1px solid ${vars.form.input.border}`,
  margin: 0,
});

globalStyle(`${reactSelectContainer} .react-select__control:hover`, {
  borderColor: vars.form.input.border,
});

globalStyle(`${reactSelectContainer} .react-select__control--is-focused`, {
  outline: `2px solid ${vars.color.brand} !important`,
  outlineOffset: "4px",
});

globalStyle(`${reactSelectContainer} .react-select__indicators`, {
  height: "42px",
});

globalStyle(`${reactSelectContainer} .react-select__indicator-separator`, {
  backgroundColor: vars.form.input.border,
});

globalStyle(`${reactSelectContainer} .react-select__indicator-separator:first-child`, {
  display: "none",
});

globalStyle(`${reactSelectContainer} .react-select__dropdown-indicator`, {
  backgroundImage: `url("${escapeSVG(
    `<svg width='12' height='8' viewBox='0 0 12 8' fill='${defaultTheme.form.select.indicator}' xmlns='http://www.w3.org/2000/svg'><path d='M1.41 0.59L-2.62268e-07 2L6 8L12 2L10.59 0.59L6 5.17L1.41 0.59Z'/></svg>`,
  )}")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "0.75rem",
  width: "2.25rem",
  height: "2.25rem",
});

globalStyle(`${reactSelectContainer} .react-select__dropdown-indicator > svg`, {
  display: "none",
});

globalStyle(`${reactSelectContainer} .react-select__clear-indicator`, {
  width: "2.25rem",
  color: vars.form.select.indicator,
});

globalStyle(`${reactSelectContainer} .react-select__clear-indicator:hover`, {
  color: vars.form.select.indicator,
});

globalStyle(`${reactSelectContainer} .react-select__value-container`, {
  paddingLeft: "15px",
});

globalStyle(`${reactSelectContainer} .react-select__value-container--is-multi`, {
  paddingLeft: "4px",
});

globalStyle(
  `${reactSelectContainer} .react-select__value-container--is-multi .react-select__placeholder, ${reactSelectContainer} .react-select__value-container--is-multi .react-select__input-container`,
  {
    paddingLeft: "11px",
  },
);

globalStyle(`${reactSelectContainer} .react-select__input-container`, {
  padding: 0,
  margin: 0,
  color: "inherit",
});

globalStyle(`${reactSelectContainer} .react-select__placeholder`, {
  margin: 0,
  color: "inherit",
});

globalStyle(`${reactSelectContainer} .react-select__option--is-selected`, {
  backgroundColor: vars.color.brand,
});

globalStyle(
  `${reactSelectContainer} .react-select__option--is-focussed:not(.react-select__option--is-selected)`,
  {
    backgroundColor: vars.color.brandLighter,
  },
);

globalStyle(`${reactSelectContainer} .react-select__multi-value`, {
  backgroundColor: "transparent",
  border: `1px solid ${vars.form.input.border}`,
});

globalStyle(`${reactSelectContainer} + ${description}, ${reactSelectContainer} + ${error}`, {
  marginTop: "0.5rem",
});

globalStyle(`${formFieldError} ${reactSelectContainer} .react-select__control`, {
  borderColor: vars.form.error.color,
  outlineColor: `${vars.form.error.color} !important`,
});
