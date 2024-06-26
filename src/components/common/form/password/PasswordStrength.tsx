"use client";

import { forwardRef, memo, useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { useMessages } from "next-intl";

import { InferComponentProps } from "@/types/component";
import { addClassNameToProps } from "@/styles/utils";

import {
  passwordStrength,
  passwordStrengthBar,
  passwordStrengthBarInner,
  passwordStrengthMessage,
} from "./PasswordStrength.styles";
import { validatePassword } from "./utils";

const PasswordStrength = forwardRef<HTMLDivElement, { name: string } & InferComponentProps<"div">>(
  ({ name, ...props }, ref) => {
    const messages = useMessages();
    const value = useWatch({ name });

    const [score, setScore] = useState<number>(-1);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
      if (typeof value === "string" && value.length > 0) {
        validatePassword(
          value,
          // @ts-expect-error This works
          messages.common.form.passwordStrength.messages,
        ).then((result) => {
          setScore(result.score);
          setMessage(result.crackTimesDisplay.offlineSlowHashing1e4PerSecond);
        });
      } else {
        setScore(-1);
        setMessage("");
      }
    }, [
      value,
      // @ts-expect-error This works
      messages.common.form.passwordStrength.messages,
    ]);

    return (
      <div {...addClassNameToProps(props, passwordStrength)} ref={ref}>
        <div className={passwordStrengthBar}>
          <div data-score={score} className={passwordStrengthBarInner} />
        </div>
        <div aria-live="polite" className={passwordStrengthMessage}>
          {message}
        </div>
      </div>
    );
  },
);

PasswordStrength.displayName = "PasswordStrength";

/**
 * Password strength meter
 */
export default memo(PasswordStrength);
