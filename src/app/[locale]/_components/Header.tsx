/* eslint-disable i18next/no-literal-string */

import { FC } from "react";

import { signOut, getIsLoggedIn } from "@/auth";
import Button from "@/components/common/button/Button";
import LoginButton from "@/components/auth/LoginButton";
import LocaleSwitcher from "@/components/common/locale-switcher/LocaleSwitcher";
import { container, hstack } from "@/styled-system/patterns";
import { css, cx } from "@/styled-system/css";
import Heading from "@/components/common/heading/Heading";
import { Link } from "@/i18n/navigation";

const Header: FC = async () => {
  const isLoggedIn = await getIsLoggedIn();

  return (
    <div
      className={css({
        py: "1rem",
        borderBottomColor: "body/25",
        borderBottomWidth: "1px",
        mb: "2rem",
      })}
    >
      <div className={cx(container({ maxWidth: "1200px" }), hstack({ gap: "1rem" }))}>
        <div>
          <Heading type="h2">next-io-ghent-app-starter</Heading>
        </div>
        <div className={hstack({ gap: "1rem" })}>
          <Link href="/">Home</Link>
          <Link href="/serverside">Serverside</Link>
        </div>
        <div className={cx(css({ marginLeft: "auto" }), hstack({ gap: "1rem" }))}>
          <LocaleSwitcher />
          {!isLoggedIn ? (
            <LoginButton />
          ) : (
            <form
              key="logout"
              action={async () => {
                "use server";
                await signOut();
              }}
              className="w-full"
            >
              <Button type="submit">Sign Out</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

Header.displayName = "Header";

export default Header;
