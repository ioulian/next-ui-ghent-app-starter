import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import LocaleSwitcher from "@/components/common/locale-switcher/LocaleSwitcher";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale}>
      <body className={inter.className}>
        <LocaleSwitcher />
        {children}
      </body>
    </html>
  );
}
