/* eslint-disable i18next/no-literal-string */

import { FC } from "react";

import { auth } from "@/auth";
import { getAuthFetcher } from "@/services/api.service";

const Test2: FC = async () => {
  const session = await auth();

  if (!session?.token) {
    return <div>Not signed in</div>;
  }

  const body = await getAuthFetcher<{ itemsPerPage: number }>()(
    `${process.env.API_DOMAIN}/api/anomaly_reports`,
    { next: { revalidate: 60 } },
  );

  return (
    <>
      <div>{session?.user?.name}</div>
      <div>Items per page: {body.itemsPerPage}</div>
    </>
  );
};

export default Test2;
