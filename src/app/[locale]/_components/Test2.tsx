/* eslint-disable i18next/no-literal-string */

import { FC } from "react";

import { getSession } from "@/auth";
import { getAuthFetcher } from "@/services/auth-api.service";

const Test2: FC = async () => {
  const session = await getSession();

  if (!session?.token.access) {
    return <div>Not signed in</div>;
  }

  try {
    const body = await getAuthFetcher<{ totalItems: number }>()(
      `${process.env.API_DOMAIN}/api/customer_projects`,
      { cache: "no-store" },
    );

    return (
      <>
        <div>{session?.user?.username}</div>
        <div>Projects: {body.totalItems}</div>
      </>
    );
  } catch (e) {
    console.error(e);

    return <div>There was an error getting this data!</div>;
  }
};

export default Test2;
