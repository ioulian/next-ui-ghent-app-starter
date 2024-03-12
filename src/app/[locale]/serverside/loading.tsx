/* eslint-disable i18next/no-literal-string */

"use client";

import LoaderDelay from "@/components/common/loader-delay/LoaderDelay";
import Spinner from "@/components/common/spinner/Spinner";

export default function Loading() {
  return (
    <LoaderDelay>
      <Spinner>Loading...</Spinner>
    </LoaderDelay>
  );
}
