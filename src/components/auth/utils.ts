"use server";

import { signIn } from "@/auth";

export type CredentialsType = {
  username: string;
  password: string;
};

export const login = async (data?: CredentialsType) => {
  if (data) {
    const { username, password } = data;
    await signIn(username, password);
  }
};
