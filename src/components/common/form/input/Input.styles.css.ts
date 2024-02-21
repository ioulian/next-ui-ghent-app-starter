import { globalStyle, style } from "@vanilla-extract/css";

import { defaultTheme, vars } from "@/styles/theme.css";
import {
  baseFormField,
  formFieldToggle,
} from "@/components/common/form/form-field/FormField.styles.css";

import { escapeSVG } from "../../../../utils/svg";

export const input = style([
  baseFormField,
  {
    appearance: "none",
    selectors: {
      '&[type="password"]::-ms-reveal': {
        display: "none",
      },
      '&:not([type="radio"]):not([type="checkbox"])': {
        width: "100%",
        fontFamily: "inherit",
        lineHeight: "1.5rem",
        padding: "9px 17px",
        fontSize: "inherit",
      },
      '&[type="checkbox"], &[type="radio"]': {
        height: "1.25rem",
        width: "1.25rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: `background-color ${vars.timing.fast}, border-color ${vars.timing.fast}`,
      },
      '&[type="checkbox"]:checked, &[type="radio"]:checked': {
        backgroundColor: vars.form.checkbox.checked.background,
        borderColor: vars.form.checkbox.checked.border,
      },
      '&[type="checkbox"]': {
        backgroundSize: "0.75rem",
      },
      '&[type="checkbox"]:checked': {
        backgroundImage: `url("${escapeSVG(
          `<svg width='24' height='24' viewBox='0 0 24 24' fill='${defaultTheme.form.checkbox.checked.color}' xmlns='http://www.w3.org/2000/svg'><path d='M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z' /></svg>`,
        )}")`,
      },
      '&[type="radio"]': {
        borderRadius: "50%",
        backgroundSize: "10px",
      },
      '&[type="radio"]:checked': {
        backgroundImage: `url("${escapeSVG(
          `<svg width='24' height='24' viewBox='0 0 24 24' fill='${defaultTheme.form.checkbox.checked.color}' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='12' /></svg>`,
        )}")`,
      },
      [`${formFieldToggle} > &`]: {
        order: -1,
      },
    },
  },
]);

export const inputIconContainer = style({
  position: "relative",
});

globalStyle(`${inputIconContainer} > svg`, {
  width: "1rem",
  height: "1rem",
  position: "absolute",
  top: "14px",
});

globalStyle(`${inputIconContainer} > svg:first-child`, {
  left: "14px",
});

globalStyle(`${inputIconContainer} > svg:last-child`, {
  right: "14px",
});

globalStyle(`${inputIconContainer} > button`, {
  position: "absolute",
  top: "10px",
});

globalStyle(`${inputIconContainer} > button:first-child`, {
  left: "10px",
});

globalStyle(`${inputIconContainer} > button:last-child`, {
  right: "10px",
});

globalStyle(
  `${inputIconContainer} > ${input}:not([type="radio"]):not([type="checkbox"]):nth-child(2)`,
  {
    paddingLeft: "40px", // 17px * 2 + icon size
  },
);

globalStyle(
  `${inputIconContainer} > ${input}:not([type="radio"]):not([type="checkbox"]):nth-last-child(2)`,
  {
    paddingRight: "40px", // 17px * 2 + icon size
  },
);
