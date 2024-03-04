/* eslint-disable i18next/no-literal-string */

import { FC } from "react";

import { auth } from "@/auth";
import { getAuthFetcher } from "@/services/api.service";

const Test2: FC = async () => {
  const session = await auth();

  if (!session?.access_token) {
    return <div>Not signed in</div>;
  }

  try {
    const body = await getAuthFetcher<{ itemsPerPage: number }>()(
      `${process.env.API_DOMAIN}/api/customer_projects`,
      { cache: "no-store" },
    );

    return (
      <>
        <div>{session?.user?.name}</div>
        <div>Items per page: {body.itemsPerPage}</div>
      </>
    );
  } catch (e) {
    console.log(e);

    return <div>There was an error getting this data!</div>;
  }
};

export default Test2;
