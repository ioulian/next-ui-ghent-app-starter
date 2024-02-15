import type { Metadata } from "next";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Source_Sans_3 } from "next/font/google";

import LocaleSwitcher from "@/components/common/locale-switcher/LocaleSwitcher";

const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--app-font-body",
});

type Props = Readonly<{
  children: ReactNode;
  params: { locale: string };
}>;

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "app.defaultMeta" });

  return {
    title: {
      template: t("title.template"),
      default: t("title.default"),
    },
    description: t("description"),
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} className={sourceSansPro.variable}>
      <body>
        <LocaleSwitcher />
        {children}
      </body>
    </html>
  );
}
