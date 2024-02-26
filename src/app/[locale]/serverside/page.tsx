import merge from "lodash/merge";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";
import { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

import { GithubDataTest } from "@/app/[locale]/serverside/_components/GithubDataTest";

type Props = Readonly<{
  params: { locale: string };
}>;

export async function generateMetadata(
  {}: Omit<Props, "children">,
  parent: ResolvingMetadata,
): Promise<Metadata | ResolvedMetadata> {
  const parentMetadata = await parent;

  return merge(omitBy(parentMetadata, isNil), { title: "Serverside" });
}

export default async function Page({}: Props) {
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
}