"use client";

import { forwardRef, memo, useCallback } from "react";
import { useCurrentEditor } from "@tiptap/react";
import iconBold from "@tabler/icons/bold.svg";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { InferComponentProps } from "@/types/component";
import VisuallyHidden from "@/components/common/visually-hidden/VisuallyHidden";

import { button } from "./RichTextToolbar.styles";

const ActionBold = forwardRef<HTMLButtonElement, InferComponentProps<"button">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const t = useTranslations("common.richText.toolbar");
    const action = useCallback(() => {
      editor?.chain().focus().toggleBold().run();
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
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={button({ isActive: editor.isActive("bold") })}
          >
            <VisuallyHidden>{t("actions.bold.text")}</VisuallyHidden>
            <SvgSprite src={iconBold} />
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("actions.bold.tooltip")}</TooltipContent>
      </Tooltip>
    );
  },
);

ActionBold.displayName = "ActionBold";

/**
 * Bold action
 */
export default memo(ActionBold);
