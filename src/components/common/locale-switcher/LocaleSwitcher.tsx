import React, { FC, memo } from "react";

import { locales } from "@/i18n";

import LocaleItem from "./LocaleItem";
import { ul } from "./LocaleSwitcher.styles.css";

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

export default memo(LocaleSwitcher);
