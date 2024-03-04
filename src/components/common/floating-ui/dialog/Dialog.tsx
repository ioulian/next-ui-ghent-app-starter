import {
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  FloatingTree,
  useFloatingParentNodeId,
  useId,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import {
  cloneElement,
  FC,
  forwardRef,
  Fragment,
  HTMLProps,
  isValidElement,
  PropsWithChildren,
  useLayoutEffect,
} from "react";
import { useCallback } from "react";

import { convertThemeVarToNumber } from "@/styles/utils";
import { token } from "@/styled-system/tokens";
import CloseButton from "@/components/common/floating-ui/close-button/CloseButton";

import Floater from "../floater/Floater";

import { DialogContext, DialogOptions, useDialog, useDialogContext } from "./hooks";
import { floatingOverlay } from "./Dialog.styles.css";

const DialogTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propRef) => {
    const context = useDialogContext();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (isValidElement(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.open ? "open" : "closed",
        }),
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        // The user can style the trigger based on the state
        data-state={context.open ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  },
);

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

const DialogHeading = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => {
    const { setLabelId } = useDialogContext();
    const id = useId();

    // Only sets `aria-labelledby` on the Dialog root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
      setLabelId(id);
      return () => setLabelId(undefined);
    }, [id, setLabelId]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        id,
        ...props,
      });
    }

    return (
      <h2 {...props} ref={ref} id={id}>
        {children}
      </h2>
    );
  },
);

const DialogDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    const { setDescriptionId } = useDialogContext();
    const id = useId();

    // Only sets `aria-describedby` on the Dialog root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
      setDescriptionId(id);
      return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        id,
        ...props,
      });
    }

    return (
      <p {...props} ref={ref} id={id}>
        {children}
      </p>
    );
  },
);

const DialogClose = forwardRef<HTMLButtonElement, HTMLProps<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    const context = useDialogContext();
    const onClick = useCallback(() => {
      context.setOpen(false);
    }, [context]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        onClick,
        ...props,
      });
    }

    return (
      <button onClick={onClick} {...props} type="button" ref={ref}>
        {children}
      </button>
    );
  },
);

// Based on: https://floating-ui.com/docs/popover
const Dialog: FC<PropsWithChildren & DialogOptions> & {
  Trigger: typeof DialogTrigger;
  Close: typeof DialogClose;
  Content: typeof DialogContent;
  Heading: typeof DialogHeading;
  Description: typeof DialogDescription;
} = ({ children, ...options }) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = useDialog(options);

  return <DialogContext.Provider value={popover}>{children}</DialogContext.Provider>;
};

Dialog.Trigger = DialogTrigger;
Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;

if (process.env.NODE_ENV === "development") {
  DialogTrigger.displayName = "DialogTrigger";
  DialogContent.displayName = "DialogContent";
  DialogHeading.displayName = "DialogHeading";
  DialogDescription.displayName = "DialogDescription";
  DialogClose.displayName = "DialogClose";
}

export default Dialog;
