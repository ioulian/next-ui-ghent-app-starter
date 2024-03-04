/* eslint-disable i18next/no-literal-string */

import { FC } from "react";

import { auth, signOut } from "@/auth";
import Button from "@/components/common/button/Button";
import LoginButton from "@/components/auth/LoginButton";

const Header: FC = async () => {
  const session = await auth();

  if (!session?.user) {
    return <LoginButton />;
  }

  return (
    <>
      <span>{session?.user.name}</span>
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
    </>
  );
};

export default Header;
