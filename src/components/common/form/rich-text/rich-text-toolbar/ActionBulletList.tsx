"use client";

import { forwardRef, memo, useCallback } from "react";
import { useCurrentEditor } from "@tiptap/react";
import iconBulletList from "@tabler/icons/outline/list.svg";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { InferComponentProps } from "@/types/component";
import VisuallyHidden from "@/components/common/visually-hidden/VisuallyHidden";

import { button } from "./RichTextToolbar.styles";

const ActionBulletList = forwardRef<HTMLButtonElement, InferComponentProps<"button">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const t = useTranslations("common.richText.toolbar");
    const action = useCallback(() => {
      editor?.chain().focus().toggleBulletList().run();
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
            disabled={!editor.can().chain().focus().toggleBulletList().run()}
            className={button({ isActive: editor.isActive("bulletList") })}
          >
            <VisuallyHidden>{t("actions.bulletList.text")}</VisuallyHidden>
            <SvgSprite src={iconBulletList} />
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("actions.bulletList.tooltip")}</TooltipContent>
      </Tooltip>
    );
  },
);

ActionBulletList.displayName = "ActionBulletList";

/**
 * Bullet list action
 */
export default memo(ActionBulletList);
