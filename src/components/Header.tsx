/* eslint-disable i18next/no-literal-string */

import { FC } from "react";

import { auth, signIn, signOut } from "@/auth";
import Button from "@/components/common/button/Button";
const Header: FC = async () => {
  const session = await auth();
  console.log(session);
  if (!session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button type="submit">Sign In</Button>
      </form>
    );
  }
  return (
    <>
      <span>
        {session?.user.name} {session?.user.test}
      </span>
      <form
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
