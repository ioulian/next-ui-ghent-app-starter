import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { defaultLocale, locales, pathnames, localePrefix } from "@/i18n";

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // This can't be a dinamic strings, so the locales are fixed here
    "/(en-GB|fr-BE|nl-BE)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // TODO: we probably will need api routes to be translatable, we need to disable translations for the auth.js routes only
    "/((?!api|_next|_vercel|.*\\..*).*)",
    //"/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix,
});

export default async function middleware(req: NextRequest) {
  return intlMiddleware(req);
}
