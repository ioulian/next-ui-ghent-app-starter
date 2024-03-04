import {
  FloatingFocusManager,
  FloatingNode,
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
  useCallback,
  useLayoutEffect,
  useMemo,
} from "react";

import { convertThemeVarToNumber } from "@/styles/utils";
import { token } from "@/styled-system/tokens";
import CloseButton from "@/components/common/floating-ui/close-button/CloseButton";

import Floater from "../floater/Floater";

import { PopoverContext, PopoverOptions, usePopover, usePopoverContext } from "./hooks";

const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propRef) => {
    const context = usePopoverContext();

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

const PopoverHeading = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => {
    const { setLabelId } = usePopoverContext();
    const id = useId();

    // Only sets `aria-labelledby` on the Popover root element
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

const PopoverDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    const { setDescriptionId } = usePopoverContext();
    const id = useId();

    // Only sets `aria-describedby` on the Popover root element
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

const PopoverClose = forwardRef<HTMLButtonElement, HTMLProps<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    const state = usePopoverContext();
    const onClick = useCallback(() => {
      state.setOpen(false);
    }, [state]);

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
const Popover: FC<PropsWithChildren & PopoverOptions> & {
  Trigger: typeof PopoverTrigger;
  Close: typeof PopoverClose;
  Content: typeof PopoverContent;
  Heading: typeof PopoverHeading;
  Description: typeof PopoverDescription;
} = ({ children, modal = false, ...restOptions }) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });

  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};

Popover.Trigger = PopoverTrigger;
Popover.Close = PopoverClose;
Popover.Content = PopoverContent;
Popover.Heading = PopoverHeading;
Popover.Description = PopoverDescription;

if (process.env.NODE_ENV === "development") {
  PopoverClose.displayName = "PopoverClose";
  PopoverTrigger.displayName = "PopoverTrigger";
  PopoverContent.displayName = "PopoverContent";
  PopoverHeading.displayName = "PopoverHeading";
  PopoverDescription.displayName = "PopoverDescription";
}

export default Popover;
