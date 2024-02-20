import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import sampleSvgSprite from "@tabler/icons/arrow-right-circle.svg";

import SvgSprite from "@/components/common/svg-sprite/SvgSprite";

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
      <SvgSprite src={sampleSvgSprite} />
    </div>
  );
}
