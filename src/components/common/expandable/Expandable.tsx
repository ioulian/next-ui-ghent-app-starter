import { FC, ReactNode, memo, useCallback, useEffect, useId, useState } from "react";
import iconChevron from "@tabler/icons/chevron-down.svg";
import AnimateHeight from "react-animate-height";
import { useUpdateEffect } from "react-use";
import clsx from "clsx";

import { InferComponentProps } from "@/@types/component";
import { defaultTheme } from "@/styles/theme.css";
import { convertThemeVarToNumber } from "@/styles/utils";

import SvgSprite from "../svg-sprite/SvgSprite";

import {
  expandable,
  expandableContainer,
  expandableOpen,
  expandableSummary,
  expandableSummaryIcon,
} from "./Expandable.styles.css";

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
    <div {...props} className={clsx(expandable, isOpen && expandableOpen, className)}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onClick}
        className={expandableSummary}
      >
        <span>{summary}</span>
        <SvgSprite className={clsx(expandableSummaryIcon)} src={iconChevron} aria-hidden />
      </button>
      <AnimateHeight
        id={id}
        duration={convertThemeVarToNumber(defaultTheme.timing.slow)}
        height={isOpen ? "auto" : 0}
      >
        <div className={expandableContainer}>{children}</div>
      </AnimateHeight>
    </div>
  );
};

export default memo(Expandable);
