// @ts-check

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Pathnames } from "next-intl/navigation";

// TODO: find a way to get this from the array definition below
export type LocaleType = "en-GB" | "fr-BE" | "nl-BE";

// If changing this, also do not forget to change middleware!!
export const locales: LocaleType[] = ["en-GB", "fr-BE", "nl-BE"];
export const defaultLocale: LocaleType = "en-GB";

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as unknown as LocaleType)) {
    notFound();
  }

  return {
    messages: {
      ...(await import(`../../messages/${locale}/common.json`)).default,
      ...(await import(`../../messages/${locale}/app.json`)).default,
    },
  };
});
