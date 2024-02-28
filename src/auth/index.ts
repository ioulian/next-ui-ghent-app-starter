import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    name?: string | null;
    test: string;
  }
}

export const config = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        return { name: credentials.username as string, id: "122", test: "hello" };
      },

      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
