import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

type Props = Readonly<{
  params: { locale: string };
}>;

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "pages" });

  return {
    title: t("notFound.meta.title"),
    description: t("notFound.meta.description"),
  };
}

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.
export default function NotFoundPage({}: Props) {
  const t = useTranslations("pages");

  return (
    <div>
      <div>{t("notFound.title")}</div>
    </div>
  );
}
