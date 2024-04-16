"use client";

import { forwardRef, memo } from "react";
import { EditorProvider, EditorProviderProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { cx } from "@/styled-system/css";
import { text } from "@/components/common/text/Text.styles";

import RichTextToolbar from "./rich-text-toolbar/RichTextToolbar";
import { richText, richTextContent } from "./RichText.styles";

const RichText = forwardRef<HTMLDivElement, Omit<EditorProviderProps, "children">>(
  ({ ...props }, ref) => {
    // TODO: maybe we should write a wrapper to be used with react-hook-form controller
    return (
      <div ref={ref} className={richText}>
        <EditorProvider
          {...props}
          slotBefore={<RichTextToolbar />}
          extensions={[StarterKit]}
          editorProps={{
            attributes: {
              class: cx(richTextContent, text),
            },
          }}
        >
          {
            " " /** Otherwise there is a TS error... See: https://github.com/ueberdosis/tiptap/issues/4618 */
          }
        </EditorProvider>
      </div>
    );
  },
);

RichText.displayName = "RichText";

/**
 * Rich text editor component
 */
export default memo(RichText);
