import { FC, memo, useCallback, useEffect, useId, useState } from "react";
import { useUpdateEffect } from "react-use";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { InferComponentProps } from "@/@types/component";
import useResizeObserver from "@/hooks/useResizeObserver";

import Button from "../button/Button";

import {
  ellipsis,
  ellipsisContent,
  ellipsisContentContainer,
  ellipsisHelperContent,
  ellipsisLineClamp,
  numberOfLinesVar,
} from "./Ellipsis.styles.css";

const Ellipsis: FC<
  {
    numberOfLines?: number;
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
      console.log(ref.current.offsetHeight, ref.current.scrollHeight);
      setShowButton(isEllipsisActive);
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

  return (
    <div
      {...props}
      className={clsx(ellipsis, className)}
      style={assignInlineVars({
        [numberOfLinesVar]: numberOfLines.toString(),
      })}
    >
      <div className={ellipsisContentContainer}>
        <div className={clsx(ellipsisContent, !isOpen && ellipsisLineClamp)} id={id}>
          {children}
        </div>
        {/* This is a helper div to check collapsed dimensions against */}
        <div
          className={ellipsisHelperContent}
          ref={ref}
          aria-hidden="true"
          style={assignInlineVars({
            [numberOfLinesVar]: numberOfLines.toString(),
          })}
        >
          {children}
        </div>
      </div>
      {showButton ? (
        <Button
          size="base"
          variant="simple"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onClick}
        >
          <span>{t(isOpen ? "collapse" : "expand")}</span>
        </Button>
      ) : null}
    </div>
  );
};

export default memo(Ellipsis);
