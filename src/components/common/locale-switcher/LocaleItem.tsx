"use client";

import React, { FC, memo, useCallback, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cx } from "@/styled-system/css";
import { LocaleType } from "@/i18n";

import { a, activeA } from "./LocaleItem.styles";

const LocaleItem: FC<{ locale: LocaleType }> = ({ locale }) => {
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
    ? t("current", {
        locale: t(`locales.${locale}`),
      })
    : t(`locales.${locale}`);

  return (
    <a
      href={`/${locale}`}
      onClick={onSelectLocale}
      lang={locale}
      hrefLang={locale}
      className={cx(a, isActive && activeA)}
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      {locale}
    </a>
  );
};

export default memo(LocaleItem);
