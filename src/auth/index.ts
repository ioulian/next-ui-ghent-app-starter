import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

import { AuthToken, login, refreshToken } from "@/services/auth-api.service";

// TODO: put declarations somewhere else
declare module "next-auth" {
  interface User extends AuthToken {
    name?: string | null;
  }
  interface Session extends AuthToken {}
}

//import "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT extends AuthToken {}
}

export type CredentialsType = {
  username: string;
  password: string;
};

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    const newToken = await refreshToken(token.refresh_token);

    return {
      ...token,
      ...newToken,
      expires_in: Date.now() + newToken.expires_in * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const config = {
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.AUTH_COOKIE_MAX_AGE ?? "30", 10) * 24 * 60 * 60, // 30 days by default
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.email = user.email;

        // TODO: typescheck these:
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;

        token.expires_in = Date.now() + user.expires_in * 1000; // TODO: this logic needs to be adjusted
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.expires_in) {
        return token;
      }
      // Access token has expired, try to update it
      // TODO: We should logout the user here if this fails
      return await refreshAccessToken(token);
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        access_token: token.access_token,
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

        const response = await login(credentials.username, credentials.password);

        return { name: credentials.username as string, id: "122", ...response };
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
