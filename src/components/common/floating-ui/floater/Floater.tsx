import { CSSProperties, forwardRef, useMemo } from "react";
import { Coords, Placement, Strategy } from "@floating-ui/react";
import clsx from "clsx";

import { InferComponentProps } from "@/@types/component";
import { defaultTheme } from "@/styles/theme.css";
import { convertThemeVarToNumber } from "@/styles/utils";

import { roundByDPR } from "./utils";
import { floater, floaterArrow } from "./Floater.styles.css";

const Floater = forwardRef<
  HTMLDivElement,
  {
    // state: TooltipState | PopoverState | DialogState;
    position?: { x: number | null; y: number | null };
    arrowPosition?: Partial<Coords>;
    strategy?: Strategy;
    placement?: Placement;
    arrowCallback?: (node: HTMLDivElement | null) => void;
    showArrow?: boolean;
  } & InferComponentProps<"div">
>(
  (
    {
      children,
      position,
      arrowPosition,
      strategy,
      placement,
      arrowCallback,
      className,
      showArrow = true,
      ...props
    },
    ref,
  ) => {
    const style = useMemo<CSSProperties>(
      () => ({
        transform: position
          ? `translate3d(${roundByDPR(position.x ?? 0)}px, ${roundByDPR(position.y ?? 0)}px, 0)`
          : undefined,
        position: strategy ?? undefined,
        visibility: position ? (position.x === null ? "hidden" : "visible") : undefined,
        ...props.style,
      }),
      [position, props.style, strategy],
    );

    const arrowStyle = useMemo(() => {
      let staticSide: string | undefined;
      let rotation: string | undefined;
      if (placement) {
        const placementFirst = placement.split("-")[0];
        staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placementFirst] as string;
        rotation = {
          top: "rotate(135deg)",
          right: "rotate(-135deg)",
          bottom: "rotate(-45deg)",
          left: "rotate(45deg)",
        }[placementFirst] as string;
        return {
          left:
            typeof arrowPosition?.x !== "undefined" && arrowPosition?.x !== null
              ? `${arrowPosition.x}px`
              : "",
          top:
            typeof arrowPosition?.y !== "undefined" && arrowPosition?.y !== null
              ? `${arrowPosition.y}px`
              : "",
          [staticSide]: `-${convertThemeVarToNumber(defaultTheme.floatingUI.floater.arrow.size) / 2}px`,
          transform: rotation,
        };
      }
    }, [arrowPosition?.x, arrowPosition?.y, placement]);

    return (
      <div ref={ref} {...props} className={clsx(floater, className)} style={style}>
        {children}
        {showArrow && arrowCallback ? (
          <div ref={arrowCallback} className={floaterArrow} style={arrowStyle} />
        ) : null}
      </div>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Floater.displayName = "Floater";
}

export default Floater;
