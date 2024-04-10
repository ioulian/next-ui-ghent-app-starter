import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { defaultLocale, locales, pathnames, localePrefix } from "@/i18n";
import { initSession } from "@/services/session.service";

export const config = {
  matcher: [
    "/",
    "/(en-GB|fr-BE|nl-BE)/:path*",
    // TODO: we probably will need api routes to be translatable, we need to disable translations
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix,
});

export default async function middleware(req: NextRequest) {
  const res = intlMiddleware(req);

  initSession(req, res);

  return res;
}
