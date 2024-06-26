"use client";

import { forwardRef, memo, useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { FloatingDelayGroup } from "@floating-ui/react";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import ActionBold from "./ActionBold";
import { toolbar, toolbarSeparator } from "./RichTextToolbar.styles";
import ActionItalic from "./ActionItalic";
import ActionStrike from "./ActionStrike";
import ActionFormat from "./ActionFormat";
import ActionBulletlist from "./ActionBulletList";
import ActionOrderedList from "./ActionOrderedList";
import ActionHorizontalRule from "./ActionHorizontalRule";

const RichTextToolbar = forwardRef<HTMLDivElement, InferComponentProps<"div">>(
  ({ ...props }, ref) => {
    const { editor } = useCurrentEditor();
    const [delay] = useState(() => ({ open: 1000, close: 200 }));

    // TODO: add more buttons?
    if (!editor) {
      return null;
    }

    return (
      <div {...addClassNameToProps(props, toolbar)} ref={ref}>
        <FloatingDelayGroup delay={delay}>
          <ActionBold />
          <ActionItalic />
          <ActionStrike />
          <div role="separator" aria-orientation="vertical" className={toolbarSeparator} />
          <ActionFormat />
          <div role="separator" aria-orientation="vertical" className={toolbarSeparator} />
          <ActionBulletlist />
          <ActionOrderedList />
          <div role="separator" aria-orientation="vertical" className={toolbarSeparator} />
          <ActionHorizontalRule />
        </FloatingDelayGroup>
      </div>
    );
  },
);

RichTextToolbar.displayName = "RichTextToolbar";

/**
 * Toolbar for RichTextEditor
 */
export default memo(RichTextToolbar);
