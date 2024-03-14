"use client";

import {
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  FloatingTree,
  useFloatingParentNodeId,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import { Fragment, HTMLProps, forwardRef, memo, useCallback } from "react";

import { token } from "@/styled-system/tokens";
import { convertThemeVarToNumber } from "@/styles/utils";

import Floater from "../floater/Floater";
import CloseButton from "../close-button/CloseButton";

import { useDialogContext } from "./hooks";
import { floatingOverlay } from "./Dialog.styles.css";

const DialogContent = forwardRef<
  HTMLDivElement,
  { withCloseButton?: boolean } & HTMLProps<HTMLDivElement>
>(({ withCloseButton, ...props }, propRef) => {
  const context = useDialogContext();
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

  if (!isMounted) {
    return null;
  }

  const Wrapper = parentId === null ? FloatingTree : Fragment;

  return (
    <Wrapper>
      <FloatingNode id={context.nodeId}>
        <FloatingPortal>
          <FloatingOverlay lockScroll className={floatingOverlay} style={styles}>
            <FloatingFocusManager context={context.context}>
              <Floater
                ref={ref}
                aria-labelledby={context.labelId}
                aria-describedby={context.descriptionId}
                {...context.getFloatingProps(props)}
              >
                {props.children}
                {withCloseButton ? <CloseButton onClick={onClick} /> : null}
              </Floater>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      </FloatingNode>
    </Wrapper>
  );
});

if (process.env.NODE_ENV === "development") {
  DialogContent.displayName = "DialogContent";
}

export default memo(DialogContent);
