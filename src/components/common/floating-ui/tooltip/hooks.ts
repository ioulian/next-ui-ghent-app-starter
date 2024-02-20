import {
  arrow,
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

import { defaultTheme } from "@/styles/theme.css";
import { convertThemeVarToNumber } from "@/styles/utils";

export interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const useTooltip = ({
  initialOpen = false,
  placement = "bottom",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(convertThemeVarToNumber(defaultTheme.floatingUI.tooltip.offset)),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "start",
        padding: convertThemeVarToNumber(defaultTheme.floatingUI.floater.flip),
      }),
      shift({ padding: convertThemeVarToNumber(defaultTheme.floatingUI.floater.shift) }),
      arrow({
        element: arrowRef,
        padding: convertThemeVarToNumber(defaultTheme.floatingUI.floater.arrow.padding),
      }),
    ],
  });

  const arrowCallback = useCallback(
    (node: HTMLDivElement | null) => {
      arrowRef.current = node;
      data.update();
    },
    [data],
  );

  const context = data.context;

  const hover = useHover(context, {
    move: false,
    enabled: typeof controlledOpen === "undefined",
  });
  const focus = useFocus(context, {
    enabled: typeof controlledOpen === "undefined",
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      arrowCallback,
      ...interactions,
      ...data,
    }),
    [open, setOpen, arrowCallback, interactions, data],
  );
};

type ContextType = ReturnType<typeof useTooltip> | null;

export const TooltipContext = createContext<ContextType>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (context === null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  return context;
};
