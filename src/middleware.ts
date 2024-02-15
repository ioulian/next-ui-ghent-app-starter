import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales, pathnames, localePrefix } from "@/i18n";

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // This can't be a dinamic strings, to the locales are fixed here
    "/(en-GB|fr-BE|nl-BE)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

export default createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix,
});
