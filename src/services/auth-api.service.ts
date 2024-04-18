import "server-only";

import { getAccessToken, signOut } from "@/auth";
import { getFetcher, injectHeaders, validateData } from "@/services/api.service";

export type AuthToken = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
};

/**
 * Wrapper for getFetcher to be used for getting protected data where Authorization header(s) are needed.
 */
export const getAuthFetcher =
  <TResponse extends Record<string, unknown>>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = injectHeaders(await getAuthorizationHeaders(), init);

    return getFetcher<TResponse>()(input, newInit).catch((err: { error: number }) => {
      if (err.error === 401) {
        signOut();
      }
      throw err;
    });
  };

/**
 * Will return correct Authorization header with JWT access token (if the user is logged in)
 */
export const getAuthorizationHeaders = async (): Promise<HeadersInit> => {
  const token = await getAccessToken();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

/**
 * Helper function to validate returned token (basic validation)
 */
export const validateToken = validateData<AuthToken>(
  ["access_token", "refresh_token"],
  // TODO: we can translate this
  "No token received, please try again later.",
);

/**
 * Will send a request to the backend to try to authorize the user
 */
export const login = (username: string, password: string): Promise<AuthToken> => {
  return new Promise((resolve, reject) => {
    getFetcher<AuthToken>()(`${process.env.API_DOMAIN}${process.env.AUTH_LOGIN_URL}`, {
      method: "POST",
      body: JSON.stringify({
        grant_type: "password", // TODO: delete
        username,
        password,
        client_id: process.env.AUTH_CLIENT_ID, // TODO: delete
        client_secret: process.env.AUTH_CLIENT_SECRET, // TODO: delete
      }),
      cache: "no-store",
    })
      .then(validateToken)
      .then(resolve)
      .catch(reject);
  });
};

/**
 * Will send a request to the backend to try to refresh token
 */
export const refreshToken = (refreshToken: AuthToken["refresh_token"]): Promise<AuthToken> => {
  return new Promise((resolve, reject) => {
    getFetcher<AuthToken>()(`${process.env.API_DOMAIN}${process.env.AUTH_REFRESH_URL}`, {
      method: "POST",
      body: JSON.stringify({
        grant_type: "refresh_token", // TODO: delete
        refresh_token: refreshToken,
        client_id: process.env.AUTH_CLIENT_ID, // TODO: delete
        client_secret: process.env.AUTH_CLIENT_SECRET, // TODO: delete
      }),
      cache: "no-store",
    })
      .then(validateToken)
      .then(resolve)
      .catch(reject);
  });
};
