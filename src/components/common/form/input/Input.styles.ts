import { css } from "@/styled-system/css";
import { token } from "@/styled-system/tokens";
import { escapeSVG } from "@/utils/svg";

export const input = css({
  appearance: "none",
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
    transition: "background-color {durations.fast}, border-color {durations.fast}",
  },
  '&[type="checkbox"]:checked, &[type="radio"]:checked': {
    backgroundColor: "form.checkbox.checked.background",
    borderColor: "form.checkbox.checked.border",
  },
  '&[type="checkbox"]': {
    backgroundSize: "0.75rem",
  },
  '&[type="checkbox"]:checked': {
    backgroundImage: `url("${escapeSVG(
      `<svg width='24' height='24' viewBox='0 0 24 24' fill='${token("colors.form.checkbox.checked.color")}' xmlns='http://www.w3.org/2000/svg'><path d='M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z' /></svg>`,
    )}")`,
  },
  '&[type="radio"]': {
    borderRadius: "50%",
    backgroundSize: "10px",
  },
  '&[type="radio"]:checked': {
    backgroundImage: `url("${escapeSVG(
      `<svg width='24' height='24' viewBox='0 0 24 24' fill='${token("colors.form.checkbox.checked.color")}' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='12' /></svg>`,
    )}")`,
  },
  //[`${formFieldToggle} > &`]: {
  //  order: -1,
  //},
});

export const inputIconContainer = css({
  position: "relative",
  "& + *:not(button)": {
    marginTop: "0.25rem",
  },
  "& > svg": {
    width: "1rem",
    height: "1rem",
    position: "absolute",
    top: "14px",
    _first: {
      left: "14px",
    },
    _last: {
      right: "14px",
    },
  },
  "& > button": {
    position: "absolute",
    top: "10px",
    _first: {
      left: "10px",
    },
    _last: {
      right: "10px",
    },
  },
  '& > input:not([type="radio"]):not([type="checkbox"]):nth-child(2)': {
    paddingLeft: "40px", // 17px * 2 + icon size
  },
  '& > input:not([type="radio"]):not([type="checkbox"]):nth-last-child(2)': {
    paddingRight: "40px", // 17px * 2 + icon size
  },
});
