"use client";

import { forwardRef, memo, useCallback } from "react";
import { useCurrentEditor } from "@tiptap/react";
import iconHorizontalRule from "@tabler/icons/outline/separator-horizontal.svg";
import { useTranslations } from "next-intl";

import Tooltip from "@/components/common/floating-ui/tooltip/Tooltip";
import TooltipTrigger from "@/components/common/floating-ui/tooltip/TooltipTrigger";
import TooltipContent from "@/components/common/floating-ui/tooltip/TooltipContent";
import SvgSprite from "@/components/common/svg-sprite/SvgSprite";
import { InferComponentProps } from "@/types/component";
import VisuallyHidden from "@/components/common/visually-hidden/VisuallyHidden";

import { button } from "./RichTextToolbar.styles";

const ActionHorizontalRule = forwardRef<HTMLButtonElement, InferComponentProps<"button">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const t = useTranslations("common.richText.toolbar");
    const action = useCallback(() => {
      editor?.chain().focus().setHorizontalRule().run();
    }, [editor]);

    if (!editor) {
      return null;
    }

    return (
      <Tooltip placement="top">
        <TooltipTrigger>
          <button type="button" {...props} ref={ref} onClick={action} className={button()}>
            <VisuallyHidden>{t("actions.horizontalRule.text")}</VisuallyHidden>
            <SvgSprite src={iconHorizontalRule} />
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("actions.horizontalRule.tooltip")}</TooltipContent>
      </Tooltip>
    );
  },
);

ActionHorizontalRule.displayName = "ActionHorizontalRule";

/**
 * Horizontal rule action
 */
export default memo(ActionHorizontalRule);
