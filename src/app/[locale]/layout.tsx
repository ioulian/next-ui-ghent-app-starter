import type { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ComponentType, ReactNode } from "react";
import dynamic from "next/dynamic";

import { htmlFontClass } from "@/styles/fonts";
import Header from "@/app/[locale]/_components/Header";
import Providers from "@/components/providers/Providers";
import { token } from "@/styled-system/tokens";
import SpriteSheetInline from "@/components/common/svg-sprite/SpriteSheetInline";

type Props = Readonly<{
  children: ReactNode;
  params: { locale: string };
}>;

export function generateViewport(): Viewport {
  return {
    themeColor: token("colors.primary.500"),
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

let Toolbar: ComponentType = () => null;
if (process.env.NODE_ENV === "development") {
  Toolbar = dynamic(() => import("../../components/providers/Toolbar"));
}

export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale} className={htmlFontClass}>
      <body>
        <SpriteSheetInline />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <Toolbar />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
