"use client";

import { forwardRef, memo, useCallback } from "react";
import { useCurrentEditor } from "@tiptap/react";
import iconOrderedList from "@tabler/icons/list-numbers.svg";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { InferComponentProps } from "@/types/component";
import VisuallyHidden from "@/components/common/visually-hidden/VisuallyHidden";

import { button } from "./RichTextToolbar.styles";

const ActionOrderedList = forwardRef<HTMLButtonElement, InferComponentProps<"button">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const t = useTranslations("common.richText.toolbar");
    const action = useCallback(() => {
      editor?.chain().focus().toggleOrderedList().run();
    }, [editor]);

    if (!editor) {
      return null;
    }

    return (
      <Tooltip placement="top">
        <TooltipTrigger>
          <button
            type="button"
            {...props}
            ref={ref}
            onClick={action}
            disabled={!editor.can().chain().focus().toggleOrderedList().run()}
            className={button({ isActive: editor.isActive("orderedList") })}
          >
            <VisuallyHidden>{t("actions.orderedList.text")}</VisuallyHidden>
            <SvgSprite src={iconOrderedList} />
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("actions.orderedList.tooltip")}</TooltipContent>
      </Tooltip>
    );
  },
);

ActionOrderedList.displayName = "ActionOrderedList";

/**
 * Ordered list action
 */
export default memo(ActionOrderedList);
