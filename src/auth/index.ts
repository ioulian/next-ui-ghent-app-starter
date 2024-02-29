import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "@/services/auth-api.service";

declare module "next-auth" {
  interface User {
    name?: string | null;
    token: string;
    refreshToken: string;
  }
  interface Session {
    token: string;
    refreshToken: string;
  }
}

export type CredentialsType = {
  username: string;
  password: string;
};

export const config = {
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.AUTH_COOKIE_MAX_AGE ?? "30", 10) * 24 * 60 * 60, // 30 days by default
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.token = user.token;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        token: token.token,
      };
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (
          typeof credentials.username !== "string" ||
          credentials.username.trim() === "" ||
          typeof credentials.password !== "string" ||
          credentials.password.trim() === ""
        ) {
          throw new Error("Invalid login data");
        }

        const { token, refreshToken } = await login(credentials.username, credentials.password);

        return { name: credentials.username as string, id: "122", token, refreshToken };
      },

      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
