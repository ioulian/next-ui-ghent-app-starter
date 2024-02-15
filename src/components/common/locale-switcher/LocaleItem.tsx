"use client";

import React, { FC, memo, useCallback, useTransition } from "react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/navigation";

const LocaleItem: FC<{ locale: string }> = ({ locale }) => {
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

  return (
    <a href={`/${locale}`} onClick={onSelectLocale}>
      {locale} {currentLocale === locale && "(current)"}
    </a>
  );
};

export default memo(LocaleItem);
