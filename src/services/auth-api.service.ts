import { getFetcher, validateData } from "@/services/api.service";

export type AuthToken = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
};

/**
 * Helper function to validate returned token (basic validation)
 */
const validateToken = validateData<AuthToken>(
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

let refreshAbortController: AbortController | null = null;

/**
 * Will send a request to the backend to try to refresh token
 */
export const refreshToken = (refreshToken: AuthToken["refresh_token"]): Promise<AuthToken> => {
  return new Promise((resolve, reject) => {
    // TODO: check if needed
    refreshAbortController?.abort();
    refreshAbortController = new AbortController();

    getFetcher<AuthToken>()(`${process.env.API_DOMAIN}${process.env.AUTH_REFRESH_URL}`, {
      method: "POST",
      body: JSON.stringify({
        grant_type: "refresh_token", // TODO: delete
        refresh_token: refreshToken,
        client_id: process.env.AUTH_CLIENT_ID, // TODO: delete
        client_secret: process.env.AUTH_CLIENT_SECRET, // TODO: delete
      }),
      signal: refreshAbortController.signal,
      cache: "no-store",
    })
      .then(validateToken)
      .then((body) => {
        resolve(body);
      })
      .catch(reject);
  });
};
