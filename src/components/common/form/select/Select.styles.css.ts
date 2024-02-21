import { style } from "@vanilla-extract/css";

import { defaultTheme } from "@/styles/theme.css";
import { baseFormField } from "@/components/common/form/form-field/FormField.styles.css";
import { escapeSVG } from "@/utils/svg";

export const select = style([
  baseFormField,
  {
    width: "100%",
    backgroundPosition: "right 1.5rem center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0.75rem",
    paddingLeft: "1.5rem",
    paddingRight: "3rem",
    appearance: "none",
    height: "2.75rem",
    lineHeight: "1.5rem",
    padding: "9px 17px",
    fontSize: "1rem",
    backgroundImage: `url("${escapeSVG(
      `<svg width="12" height="8" viewBox="0 0 12 8" fill=\"${defaultTheme.form.select.indicator}" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.59L-2.62268e-07 2L6 8L12 2L10.59 0.59L6 5.17L1.41 0.59Z"/></svg>`,
    )}")`,
  },
]);
