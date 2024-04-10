import merge from "lodash/merge";

import { login, refreshToken } from "@/services/auth-api.service";
import {
  getFromSessionStorage,
  getSessionId,
  removeFromSessionStorage,
  setToSessionStorage,
} from "@/services/session.service";
import storage from "@/lib/storage";
import tokenRefreshMap from "@/auth/tokenRefreshMap";
import { redirect } from "@/i18n/navigation";

export const SESSION_STORAGE_KEY = "auth" as const;

export type AuthSessionType = {
  user: {
    id: string;
    username: string;
  };
  token: {
    access: string;
    refresh: string;
    expires: number;
    isRefreshing: boolean;
  };
};

/**
 * Will try to sign in the user and set user data/tokens in session
 *
 * @param username Username to send to API
 * @param password Password to send to API
 */
export const signIn = async (username: string, password: string): Promise<void> => {
  try {
    const response = await login(username, password);

    const storageItem: AuthSessionType = {
      // TODO:
      user: {
        id: "test",
        username: "username",
      },
      token: {
        access: response.access_token,
        refresh: response.refresh_token,
        expires: Date.now() + response.expires_in * 1000,
        isRefreshing: false,
      },
    };
    await setToSessionStorage(SESSION_STORAGE_KEY, JSON.stringify(storageItem));
  } catch (e) {
    console.error(e);
  }
};

/**
 * Will clear auth session data, thus signing off the user
 */
export const signOut = async () => {
  await removeFromSessionStorage(SESSION_STORAGE_KEY);
};

/**
 * @returns User auth session if set
 */
export const getSession = async (): Promise<AuthSessionType | undefined> => {
  const item = await getFromSessionStorage(SESSION_STORAGE_KEY);
  if (typeof item === "undefined") {
    return undefined;
  }

  return item as unknown as AuthSessionType;
};

/**
 * Will return if user is logged in
 */
export const getIsLoggedIn = async () => {
  const session = await getSession();

  return typeof session?.token.access === "string";
};

/**
 * Will auto refresh token if it's expired
 *
 * @returns Access token if set
 */
export const getAccessToken = async (): Promise<string | undefined> => {
  const session = await getSession();
  const sessionId = getSessionId();

  // If no sessionID is found or no tokens have been set, do nothing
  // This means the user hasn't been logged in
  if (!session?.token || !session?.token?.access || !sessionId) {
    return undefined;
  }

  // Check if token is expired
  if (Date.now() > (session?.token?.expires ?? 0)) {
    const isRefreshing = tokenRefreshMap[sessionId] === true;

    // Check if the token is already being refreshed (this will be the case if you have multiple simultaneous requests)
    if (!isRefreshing) {
      // TODO: find a cleaner way to store these objects
      tokenRefreshMap[sessionId] = true;

      try {
        const newToken = await refreshToken(session?.token.refresh);
        const storageItem = merge(session, {
          token: {
            access: newToken.access_token,
            refresh: newToken.refresh_token,
            expires: Date.now() + newToken.expires_in * 1000,
            isRefreshing: false,
          },
        });
        await setToSessionStorage(SESSION_STORAGE_KEY, JSON.stringify(storageItem));

        delete tokenRefreshMap[sessionId];
        return newToken.access_token;
      } catch (e) {
        console.error(e);
      }

      delete tokenRefreshMap[sessionId];
      return undefined;
    } else {
      // If the token is already refreshing, wait for changes and return the latest token
      return new Promise(async (resolve) => {
        const unwatch = await storage.watch(async () => {
          if (tokenRefreshMap[sessionId] !== true) {
            await unwatch();
            const newSession = await getSession();

            resolve(newSession?.token.access);
          }
        });
      });
    }
  }

  return session?.token?.access;
};

/**
 * Will mark current page as authenticated only and will redirect user if he's not logged in
 */
export const requireLoggedIn = async (redirectTo?: string) => {
  const isLoggedIn = await getIsLoggedIn();

  if (!isLoggedIn) {
    redirect({
      // TODO: redirect to .env var? Login page?
      // @ts-expect-error FIXME:
      pathname: redirectTo,
      query: {
        isNotLoggedIn: true,
      },
    });
  }
};
