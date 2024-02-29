import { getFetcher, validateData } from "@/services/api.service";

export type AuthTokens = {
  token: string;
  refreshToken: string;
  refreshTokenExpiration: string;
};

export const login = (username: string, password: string): Promise<AuthTokens> => {
  return new Promise((resolve, reject) => {
    getFetcher<AuthTokens>()(`${process.env.API_DOMAIN}${process.env.AUTH_LOGIN_URL}`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(
        validateData<AuthTokens>(
          ["token", "refreshToken"],
          // TODO: we can translate this
          "No tokens received, please try again later.",
        ),
      )
      .then(resolve)
      .catch(reject);
  });
};
