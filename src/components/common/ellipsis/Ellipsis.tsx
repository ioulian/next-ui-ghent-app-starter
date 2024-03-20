"use client";

import { FC, memo, useCallback, useEffect, useId, useMemo, useState } from "react";
import { useUpdateEffect } from "react-use";
import { useTranslations } from "next-intl";

import { InferComponentProps } from "@/types/component";
import useResizeObserver from "@/hooks/useResizeObserver";
import { css, cx } from "@/styled-system/css";

import Button from "../button/Button";

import {
  ellipsis,
  ellipsisContent,
  ellipsisContentContainer,
  ellipsisHelperContent,
  ellipsisLineClamp,
  numberOfLinesVar,
} from "./Ellipsis.styles";

const Ellipsis: FC<
  {
    /**
     * Number of lines to trunctate the text
     */
    numberOfLines?: number;

    /**
     * Controlled
     */
    open?: boolean;

    /**
     * Is ellipsis showing all text or is truncated?
     *
     * @param isOpen
     */
    onToggle?: (isOpen: boolean) => void;
  } & InferComponentProps<"div">
> = ({ children, open = false, onToggle, numberOfLines = 2, className, ...props }) => {
  const t = useTranslations("common.ellipsis");
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [showButton, setShowButton] = useState<boolean>(true);
  const id = useId();

  // Use resize observer against the collapsed helper content
  const [ref, rect] = useResizeObserver<HTMLDivElement>();
  useEffect(() => {
    if (ref.current) {
      const isEllipsisActive =
        ref.current.offsetWidth < ref.current.scrollWidth ||
        ref.current.offsetHeight < ref.current.scrollHeight;
      setShowButton(isEllipsisActive || process.env.JEST_WORKER_ID !== undefined);
    }
  }, [rect, ref]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useUpdateEffect(() => {
    onToggle?.(isOpen);
  }, [onToggle, isOpen]);

  const onClick = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  const numberOfLinesStyle = useMemo(
    () => ({
      [numberOfLinesVar]: numberOfLines.toString(),
    }),
    [numberOfLines],
  );

  return (
    <div
      {...props}
      className={cx(ellipsis, className)}
      style={numberOfLinesStyle}
      aria-expanded={isOpen || !showButton}
    >
      <div className={ellipsisContentContainer}>
        <div className={cx(css(ellipsisContent), !isOpen && css(ellipsisLineClamp))} id={id}>
          {children}
        </div>
        {/* This is a helper div to check collapsed dimensions against */}
        <div
          className={ellipsisHelperContent}
          ref={ref}
          aria-hidden="true"
          style={numberOfLinesStyle}
        >
          {children}
        </div>
      </div>
      {showButton === true && (
        <Button
          size="base"
          intent="simple"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onClick}
        >
          <span>{t(isOpen ? "collapse" : "expand")}</span>
        </Button>
      )}
    </div>
  );
};

/**
 * Ellipis component that will automatically truncate/clamp the text inside.
 * It's possible to automatically hide the "more" button when it's not needed.
 */
export default memo(Ellipsis);
