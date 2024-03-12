/* eslint-disable i18next/no-literal-string */

import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import sampleSvgSprite from "@tabler/icons/arrow-right-circle.svg";
import iconChevronRight from "@tabler/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/chevron-left.svg";

import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import Text from "@/components/common/text/Text";
import Pagination from "@/components/common/pagination/Pagination";
import Test from "@/app/[locale]/_components/Test";
import ButtonGroup from "@/components/common/button-group/ButtonGroup";
import Button from "@/components/common/button/Button";
import Ellipsis from "@/components/common/ellipsis/Ellipsis";
import Expandable from "@/components/common/expandable/Expandable";
import { generateSanitizedMetadata } from "@/utils/next";
import Test2 from "@/app/[locale]/_components/Test2";

import styles from "./_styles/styles.module.css";

type Props = Readonly<{
  params: { locale: string };
}>;

export const generateMetadata = generateSanitizedMetadata<Props>(async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: "pages.home.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
});

const Page: NextPage<Props> = ({}) => {
  const t = useTranslations("pages");

  return (
    <div>
      <div className={styles.test}>{t("home.title")}</div>
      <Text>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>Paragraph 2</p>
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>adsf</li>
        </ol>
      </Text>
      <Test />
      <ButtonGroup>
        <Button
          iconBefore={<SvgSprite src={iconChevronLeft} title="test-title" />}
          iconAfter={<SvgSprite src={iconChevronRight} title="test-title" />}
        >
          Primary Action
        </Button>
        <Button intent="secondary">Secondary Action</Button>
        <hr />
        <Button size="base" intent="simple">
          Cancel
        </Button>
      </ButtonGroup>
      <Ellipsis>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at
          venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh.
          Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus,
          varius
        </p>
      </Ellipsis>
      <Expandable summary="Click">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at
          venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh.
          Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus,
          varius
        </p>
      </Expandable>
      <Pagination
        {...{
          breakLabel: "...",
          nextLabel: <SvgSprite src={iconChevronRight} />,
          pageRangeDisplayed: 5,
          pageCount: 30,
          previousLabel: <SvgSprite src={iconChevronLeft} />,
        }}
      />
      <Test2 />

      <SvgSprite src={sampleSvgSprite} />
    </div>
  );
};

export default Page;
