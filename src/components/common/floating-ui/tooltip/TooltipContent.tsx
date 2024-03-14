"use client";

import { FloatingPortal, useMergeRefs, useTransitionStyles } from "@floating-ui/react";
import { HTMLProps, forwardRef, memo, useMemo } from "react";

import { token } from "@/styled-system/tokens";
import { convertThemeVarToNumber } from "@/styles/utils";

import Floater from "../floater/Floater";

import { useTooltipContext } from "./hooks";

const TooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((props, propRef) => {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  const { isMounted, styles } = useTransitionStyles(context.context, {
    duration: {
      open: convertThemeVarToNumber(token("durations.normal")),
      close: convertThemeVarToNumber(token("durations.fast")),
    },
  });
  const position = useMemo(
    () => ({ x: context.x ?? 0, y: context.y ?? 0 }),
    [context.x, context.y],
  );

  if (!isMounted) {
    return null;
  }

  return (
    <FloatingPortal>
      <Floater
        ref={ref}
        position={position}
        arrowPosition={context.middlewareData.arrow}
        strategy={context.strategy}
        placement={context.placement}
        arrowCallback={context.arrowCallback}
        {...context.getFloatingProps(props)}
        style={styles}
      />
    </FloatingPortal>
  );
});

if (process.env.NODE_ENV === "development") {
  TooltipContent.displayName = "TooltipContent";
}

export default memo(TooltipContent);
