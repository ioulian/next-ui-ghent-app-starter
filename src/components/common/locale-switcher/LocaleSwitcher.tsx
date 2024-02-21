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

export default memo(LocaleSwitcher);
