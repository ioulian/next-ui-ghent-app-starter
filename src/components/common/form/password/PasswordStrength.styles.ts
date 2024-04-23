import { css } from "@/styled-system/css";

export const passwordStrength = css({
  marginTop: "0.5rem",
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
});

export const passwordStrengthBar = css({
  width: "80px",
  height: "1rem",
  borderRadius: "normal",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "form.input.border",
  overflow: "hidden",
});

export const passwordStrengthBarInner = css({
  width: "0",
  height: "calc(1rem - 2px)",
  transition: "common",
  boxShadow: "strengthMeter",
  borderRadius: "4px",
  '&[data-score="-1"]': {
    width: "20%",
    backgroundColor: "secondary.200",
  },
  '&[data-score="0"]': {
    width: "20%",
    backgroundColor: "negative.500",
  },
  '&[data-score="1"]': {
    width: "40%",
    backgroundColor: "negative.500",
  },
  '&[data-score="2"]': {
    width: "60%",
    backgroundColor: "yellow",
  },
  '&[data-score="3"]': {
    width: "80%",
    backgroundColor: "orange",
  },
  '&[data-score="4"]': {
    width: "100%",
    backgroundColor: "positive.500",
  },
});

export const passwordStrengthMessage = css({
  fontSize: "0.875rem",
  lineHeight: "1rem",
});
