import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import { locales, pathnames, localePrefix } from ".";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
