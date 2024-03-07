import React, { FC, memo } from "react";

import { locales } from "@/i18n";

import { ul } from "./LocaleSwitcher.styles";
import LocaleItem from "./LocaleItem";

const LocaleSwitcher: FC = () => {
  return (
    <nav>
      <ul className={ul}>
        {locales.map((locale) => (
          <li key={locale}>
            <LocaleItem locale={locale} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

/**
 * Locale switcher component. Will render buttons to switch different locales.
 */
export default memo(LocaleSwitcher);
