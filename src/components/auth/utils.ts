"use server";

import { CredentialsType, signIn } from "@/auth";

export const login = async (data?: CredentialsType) => {
  if (data) {
    const { username, password } = data;
    await signIn("credentials", { username, password });
  }
};
