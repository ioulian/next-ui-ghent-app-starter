"use client";

import { forwardRef, memo, useCallback } from "react";
import { useCurrentEditor } from "@tiptap/react";
import iconStrikethrough from "@tabler/icons/strikethrough.svg";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { InferComponentProps } from "@/types/component";
import VisuallyHidden from "@/components/common/visually-hidden/VisuallyHidden";

import { button } from "./RichTextToolbar.styles";

const ActionStrike = forwardRef<HTMLButtonElement, InferComponentProps<"button">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const t = useTranslations("common.richText.toolbar");
    const action = useCallback(() => {
      editor?.chain().focus().toggleStrike().run();
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
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={button({ isActive: editor.isActive("strike") })}
          >
            <VisuallyHidden>{t("actions.strike.text")}</VisuallyHidden>
            <SvgSprite src={iconStrikethrough} />
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("actions.strike.tooltip")}</TooltipContent>
      </Tooltip>
    );
  },
);

ActionStrike.displayName = "ActionStrike";

/**
 * Strikethrough action
 */
export default memo(ActionStrike);
