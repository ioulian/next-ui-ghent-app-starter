import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import sampleSvgSprite from "@tabler/icons/arrow-right-circle.svg";
import iconChevronRight from "@tabler/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/chevron-left.svg";

import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import Text from "@/components/common/text/Text";
import Pagination from "@/components/common/pagination/Pagination";

import styles from "./styles.module.css";

type Props = Readonly<{
  params: { locale: string };
}>;

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pages.home.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Page({}: Props) {
  const t = useTranslations("pages");

  return (
    <div>
      <div className={styles.test}>{t("home.title")}</div>
      <Text>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>Paragraph 1</p>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>Paragraph 2</p>
        <ul>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <li>List item 1</li>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <li>List item 2</li>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <li>List item 3</li>
        </ul>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>Paragraph 2</p>
        <ol>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <li>List item 1</li>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <li>List item 2</li>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <li>List item 3</li>
        </ol>
      </Text>

      <Pagination
        {...{
          breakLabel: "...",
          nextLabel: <SvgSprite src={iconChevronRight} />,
          pageRangeDisplayed: 5,
          pageCount: 30,
          previousLabel: <SvgSprite src={iconChevronLeft} />,
        }}
      />
      <SvgSprite src={sampleSvgSprite} />
    </div>
  );
}
