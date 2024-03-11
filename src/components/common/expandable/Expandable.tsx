"use client";

import { FC, ReactNode, memo, useCallback, useEffect, useId, useState } from "react";
import iconChevron from "@tabler/icons/chevron-down.svg";
import AnimateHeight from "react-animate-height";
import { useUpdateEffect } from "react-use";

import { InferComponentProps } from "@/types/component";
import { convertThemeVarToNumber } from "@/styles/utils";
import { token } from "@/styled-system/tokens";
import { cx } from "@/styled-system/css";
import { easings } from "@/utils/easings";

import SvgSprite from "../svg-sprite/SvgSprite";

import {
  expandable,
  expandableContainer,
  expandableSummary,
  expandableSummaryIcon,
} from "./Expandable.styles";

const Expandable: FC<
  {
    /**
     * Title of the block
     */
    summary: ReactNode;

    /**
     * Controlled
     */
    open?: boolean;

    /**
     * Is expandable currently open or not?
     *
     * @param isOpen
     */
    onToggle?: (isOpen: boolean) => void;
  } & InferComponentProps<"div">
> = ({ summary, children, open = false, onToggle, className, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const id = useId();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useUpdateEffect(() => {
    onToggle?.(isOpen);
  }, [onToggle, isOpen]);

  const onClick = useCallback(() => {
    setIsOpen((newIsOpen) => !newIsOpen);
  }, []);

  return (
    <div {...props} className={cx(expandable, className)}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onClick}
        className={expandableSummary}
      >
        <span>{summary}</span>
        <SvgSprite
          className={cx(expandableSummaryIcon({ isOpen }))}
          src={iconChevron}
          aria-hidden
        />
      </button>
      <AnimateHeight
        id={id}
        easing={easings.easeOutCubic}
        duration={convertThemeVarToNumber(token("durations.slow"))}
        height={isOpen ? "auto" : 0}
      >
        <div className={expandableContainer}>{children}</div>
      </AnimateHeight>
    </div>
  );
};

/**
 * Basic, animated, <summary> alternative
 */
export default memo(Expandable);
