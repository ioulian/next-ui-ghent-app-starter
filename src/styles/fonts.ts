import { Source_Sans_3 } from "next/font/google";

export const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const htmlFontClass = sourceSansPro.variable;
