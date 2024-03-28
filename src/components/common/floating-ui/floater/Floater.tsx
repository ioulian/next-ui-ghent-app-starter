import { CSSProperties, forwardRef, memo, useMemo } from "react";
import { Coords, Placement, Strategy } from "@floating-ui/react";

import { InferComponentProps } from "@/types/component";
import { token } from "@/styled-system/tokens";
import { addClassNameToProps, convertThemeVarToNumber } from "@/styles/utils";

import { roundByDPR } from "./utils";
import { floater, floaterArrow } from "./Floater.styles";

const Floater = forwardRef<
  HTMLDivElement,
  {
    position?: { x: number | null; y: number | null };
    arrowPosition?: Partial<Coords>;
    strategy?: Strategy;
    placement?: Placement;
    asSheet?: boolean;
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
      asSheet = false,
      arrowCallback,
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
        position: strategy ?? "relative",
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
          [staticSide]: `-${convertThemeVarToNumber(token("spacing.floating.floater.arrow.size")) / 2}px`,
          transform: rotation,
        };
      }
    }, [arrowPosition?.x, arrowPosition?.y, placement]);

    return (
      <div
        ref={ref}
        {...addClassNameToProps(
          props,
          floater({
            asSheet,
            placement: asSheet
              ? (placement?.split("-")[0] as "top" | "bottom" | "right" | "left")
              : undefined,
          }),
        )}
        style={style}
      >
        {children}
        {showArrow && arrowCallback ? (
          <div ref={arrowCallback} className={floaterArrow} style={arrowStyle} />
        ) : null}
      </div>
    );
  },
);

Floater.displayName = "Floater";

/**
 * Floater window used in Floating UI Components
 */
export default memo(Floater);
