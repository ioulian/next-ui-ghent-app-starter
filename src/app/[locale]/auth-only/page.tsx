/* eslint-disable i18next/no-literal-string */

import { NextPage } from "next";

import { requireLoggedIn } from "@/auth";

type Props = Readonly<{
  params: { locale: string };
}>;

const Page: NextPage<Props> = async ({}) => {
  // TODO: check if we don't leak RSC data
  await requireLoggedIn();

  return <>This page is only visible when you are logged in</>;
};

export default Page;
