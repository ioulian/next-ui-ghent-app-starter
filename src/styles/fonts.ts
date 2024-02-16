import { Source_Sans_3 } from "next/font/google";

const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--app-font-body",
});

export const htmlFontClass = sourceSansPro.variable;
