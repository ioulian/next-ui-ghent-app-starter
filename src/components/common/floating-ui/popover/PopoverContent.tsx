"use client";

import {
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  useFloatingParentNodeId,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import { Fragment, HTMLProps, forwardRef, memo, useCallback, useMemo } from "react";

import { token } from "@/styled-system/tokens";
import { convertThemeVarToNumber } from "@/styles/utils";

import Floater from "../floater/Floater";
import CloseButton from "../close-button/CloseButton";

import { usePopoverContext } from "./hooks";

const PopoverContent = forwardRef<
  HTMLDivElement,
  { withCloseButton?: boolean } & HTMLProps<HTMLDivElement>
>(({ withCloseButton = false, ...props }, propRef) => {
  const context = usePopoverContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  const parentId = useFloatingParentNodeId();
  const { isMounted, styles } = useTransitionStyles(context.context, {
    duration: {
      open: convertThemeVarToNumber(token("durations.normal")),
      close: convertThemeVarToNumber(token("durations.fast")),
    },
  });
  const onClick = useCallback(() => {
    context.setOpen(false);
  }, [context]);

  const position = useMemo(
    () => ({ x: context.x ?? 0, y: context.y ?? 0 }),
    [context.x, context.y],
  );

  if (!isMounted) {
    return null;
  }

  const Wrapper = parentId === null ? FloatingTree : Fragment;

  return (
    <Wrapper>
      <FloatingNode id={context.nodeId}>
        <FloatingPortal>
          <FloatingFocusManager context={context.context} modal={context.modal}>
            <Floater
              ref={ref}
              position={position}
              arrowPosition={context.middlewareData.arrow}
              strategy={context.strategy}
              placement={context.placement}
              arrowCallback={context.arrowCallback}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
              style={styles}
            >
              {props.children}
              {withCloseButton ? <CloseButton onClick={onClick} /> : null}
            </Floater>
          </FloatingFocusManager>
        </FloatingPortal>
      </FloatingNode>
    </Wrapper>
  );
});

if (process.env.NODE_ENV === "development") {
  PopoverContent.displayName = "PopoverContent";
}

export default memo(PopoverContent);
