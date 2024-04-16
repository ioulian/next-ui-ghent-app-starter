"use client";

import { forwardRef, memo, useCallback } from "react";
import { useCurrentEditor } from "@tiptap/react";
import iconItalic from "@tabler/icons/outline/italic.svg";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { InferComponentProps } from "@/types/component";
import VisuallyHidden from "@/components/common/visually-hidden/VisuallyHidden";

import { button } from "./RichTextToolbar.styles";

const ActionItalic = forwardRef<HTMLButtonElement, InferComponentProps<"button">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const t = useTranslations("common.richText.toolbar");
    const action = useCallback(() => {
      editor?.chain().focus().toggleItalic().run();
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
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={button({ isActive: editor.isActive("italic") })}
          >
            <VisuallyHidden>{t("actions.italic.text")}</VisuallyHidden>
            <SvgSprite src={iconItalic} />
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("actions.italic.tooltip")}</TooltipContent>
      </Tooltip>
    );
  },
);

ActionItalic.displayName = "ActionItalic";

/**
 * Italic action
 */
export default memo(ActionItalic);
