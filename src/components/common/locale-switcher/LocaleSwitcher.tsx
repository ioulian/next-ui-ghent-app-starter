import React, { FC, memo } from "react";

import { locales } from "@/i18n";

import LocaleItem from "./LocaleItem";

const LocaleSwitcher: FC = () => {
  return (
    <ul>
      {locales.map((locale) => (
        <li key={locale}>
          <LocaleItem locale={locale} />
        </li>
      ))}
    </ul>
  );
};

export default memo(LocaleSwitcher);
