import { baseFormField } from "@/components/common/form/form-field/FormField.styles";
import { css } from "@/styled-system/css";

export const select = css(baseFormField.raw(), {
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
  backgroundImage: "selectIndicator",
});
