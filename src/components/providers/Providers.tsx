"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { FC, PropsWithChildren, memo } from "react";

import { token } from "@/styled-system/tokens";
import { LOADER_DELAY } from "@/utils/constants";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color={token("colors.primary.500")}
        shouldCompareComplexProps
        delay={LOADER_DELAY}
      />
    </>
  );
};

/**
 * Providers that need client component to run.
 */
export default memo(Providers);
