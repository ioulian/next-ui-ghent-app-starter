"use server";

import "server-only";

import { signInCredentials } from "@/auth";

export type CredentialsType = {
  username: string;
  password: string;
};

export const login = async (data?: CredentialsType): Promise<void> => {
  if (data) {
    const { username, password } = data;
    await signInCredentials(username, password);
  }
};
