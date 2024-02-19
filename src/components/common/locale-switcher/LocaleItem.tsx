"use client";

import React, { FC, memo, useCallback, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";

import { usePathname, useRouter } from "@/navigation";

import { a, activeA } from "./LocaleItem.styles.css";

const LocaleItem: FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations("common.localeSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectLocale = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      startTransition(() => {
        router.replace(pathname, { locale });
      });
    },
    [pathname, router, locale],
  );

  const isActive = currentLocale === locale;
  const ariaLabel = isActive
    ? (t("current", {
        // @ts-expect-error Is dynamic
        locale: t(`locales.${locale}`),
      }) as string)
    : // @ts-expect-error Is dynamic
      (t(`locales.${locale}`) as string);

  return (
    <a
      href={`/${locale}`}
      onClick={onSelectLocale}
      lang={locale}
      hrefLang={locale}
      className={clsx(a, isActive && activeA)}
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      {locale}
    </a>
  );
};

export default memo(LocaleItem);