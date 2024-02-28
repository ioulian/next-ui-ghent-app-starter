import type { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";
import Link from "next/link";

import LocaleSwitcher from "@/components/common/locale-switcher/LocaleSwitcher";
import { htmlFontClass } from "@/styles/fonts";
import SpriteSheetPreload from "@/components/common/svg-sprite/SpriteSheetPreload";
import Header from "@/components/Header";

type Props = Readonly<{
  children: ReactNode;
  params: { locale: string };
}>;

export function generateViewport(): Viewport {
  return {
    themeColor: "#0017ee",
    initialScale: 1,
    userScalable: true,
  };
}

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
  const messages = useMessages();

  return (
    <html lang={locale} className={htmlFontClass}>
      <head>
        <SpriteSheetPreload />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <LocaleSwitcher />
          <Link href="/">{"Home"}</Link>
          <Link href="/serverside">{"Serverside"}</Link>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
