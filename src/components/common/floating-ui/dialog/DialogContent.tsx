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
import {
  Fragment,
  HTMLProps,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { token } from "@/styled-system/tokens";
import { convertThemeVarToNumber } from "@/styles/utils";

import Floater from "../floater/Floater";
import CloseButton from "../close-button/CloseButton";
import Sheet from "../sheet/Sheet";

import { useDialogContext } from "./hooks";
import { floatingOverlay } from "./Dialog.styles.css";

const DialogContent = forwardRef<
  HTMLDivElement,
  { withCloseButton?: boolean; asSheet?: boolean } & HTMLProps<HTMLDivElement>
>(({ withCloseButton, asSheet = false, ...props }, propRef) => {
  const context = useDialogContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  const parentId = useFloatingParentNodeId();
  const { isMounted, styles } = useTransitionStyles(context.context, {
    duration: {
      open: convertThemeVarToNumber(token("durations.normal")),
      close: convertThemeVarToNumber(token("durations.fast")),
    },
  });

  const { styles: stylesSheet } = useTransitionStyles(context.context, {
    duration: {
      open: convertThemeVarToNumber(token("durations.normal")),
      close: convertThemeVarToNumber(token("durations.fast")),
    },
    initial: ({ side }) => {
      let transform: string | undefined;
      if (side === "top") {
        transform = "translate3d(0, -100%, 0)";
      }

      if (side === "bottom") {
        transform = "translate3d(0, 100%, 0)";
      }

      if (side === "left") {
        transform = "translate3d(-100%, 0, 0)";
      }

      if (side === "right") {
        transform = "translate3d(100%, 0, 0)";
      }

      return {
        transform,
      };
    },
  });

  const onClick = useCallback(() => {
    context.setOpen(false);
  }, [context]);

  const style = useMemo(
    () => ({ ...styles, overflow: asSheet ? "hidden" : "auto" }),
    [styles, asSheet],
  );

  // This will disable focus manager during animation thus preventing focussing items outside the viewport
  const [focusDisabled, setFocusDisabled] = useState<boolean>(true);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (isMounted) {
      timeout = setTimeout(
        () => {
          setFocusDisabled(false);
        },
        convertThemeVarToNumber(token("durations.normal")),
      );
    } else {
      setFocusDisabled(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isMounted, asSheet]);

  if (!isMounted) {
    return null;
  }

  const Wrapper = parentId === null ? FloatingTree : Fragment;

  return (
    <Wrapper>
      <FloatingNode id={context.nodeId}>
        <FloatingPortal>
          <FloatingOverlay lockScroll className={floatingOverlay({ asSheet })} style={style}>
            <FloatingFocusManager context={context.context} modal disabled={focusDisabled}>
              {asSheet ? (
                <Sheet
                  ref={ref}
                  placement={context.placement}
                  aria-labelledby={context.labelId}
                  aria-describedby={context.descriptionId}
                  {...context.getFloatingProps(props)}
                  style={stylesSheet}
                >
                  {props.children}
                  {withCloseButton ? <CloseButton onClick={onClick} /> : null}
                </Sheet>
              ) : (
                <Floater
                  ref={ref}
                  placement={context.placement}
                  aria-labelledby={context.labelId}
                  aria-describedby={context.descriptionId}
                  {...context.getFloatingProps(props)}
                >
                  {props.children}
                  {withCloseButton ? <CloseButton onClick={onClick} /> : null}
                </Floater>
              )}
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      </FloatingNode>
    </Wrapper>
  );
});

DialogContent.displayName = "DialogContent";

export default memo(DialogContent);
