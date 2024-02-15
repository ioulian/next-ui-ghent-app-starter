import React, { FC, memo } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";

import { locales } from "@/i18n";

import LocaleItem from "./LocaleItem";
import { ul } from "./LocaleSwitcher.styles.css";

const LocaleSwitcher: FC = () => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={pick(messages, "common.localeSwitcher")}>
      <nav>
        <ul className={ul}>
          {locales.map((locale) => (
            <li key={locale}>
              <LocaleItem locale={locale} />
            </li>
          ))}
        </ul>
      </nav>
    </NextIntlClientProvider>
  );
};

export default memo(LocaleSwitcher);
