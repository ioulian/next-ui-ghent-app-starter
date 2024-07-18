import { NextPage } from "next";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import { GithubDataTest } from "@/app/[locale]/serverside/_components/GithubDataTest";
import { generateSanitizedMetadata } from "@/utils/next";
import { LocaleType } from "@/i18n";

type Props = Readonly<{
  params: { locale: LocaleType };
}>;

export const generateMetadata = generateSanitizedMetadata<Props>(async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: "pages.serverside.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
});

const Page: NextPage<Props> = async ({}) => {
  const data = await (
    await fetch("https://api.github.com/repos/vercel/swr", { next: { revalidate: 60 } })
  ).json();

  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div>
      <Suspense fallback={<p>Loading data for next.js...</p>}>
        <GithubDataTest url="https://api.github.com/repos/vercel/next.js" />
      </Suspense>
      <Suspense fallback={<p>Loading data for panda-css...</p>}>
        <GithubDataTest url="https://api.github.com/repos/chakra-ui/panda" />
      </Suspense>
    </>
  );
};

export default Page;
