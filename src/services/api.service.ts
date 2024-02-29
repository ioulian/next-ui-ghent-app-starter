import { auth } from "@/auth";

export type API_REQUEST_STATUS = "idle" | "loading" | "succeeded" | "failed";

export const apiToJson =
  <TResponse extends Record<string, unknown>>() =>
  (res: Response): Promise<TResponse> => {
    if (res.ok) {
      const contentType = res.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        return res.json();
      }

      // Handle empty body
      return new Promise((resolve, reject) => {
        res
          .text()
          .then(() => {
            resolve({} as TResponse);
          })
          .catch(() => {
            reject(res.status.toString());
          });
      });
    }

    return new Promise((resolve, reject) => {
      res
        .json()
        .then((json) => {
          reject(json);
        })
        .catch(() => {
          reject(res.status.toString());
        });
    });
  };

export const getContentTypeHeaders = (): HeadersInit => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export const validateData =
  <T extends Record<string, unknown>>(keys: (keyof T)[], errorMessage: string) =>
  (body: T): Promise<T> =>
    new Promise((resolve, reject) => {
      const isValid = keys.every((key) => {
        if (typeof body[key] === "undefined") {
          return false;
        }

        return !(typeof body[key] === "string" && (body[key] as string).trim() === "");
      });

      if (isValid) {
        resolve(body);
      } else {
        reject(errorMessage);
      }
    });

export const getFetcher =
  <T extends Record<string, unknown>>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = injectHeaders(getContentTypeHeaders(), init);
    const res = await fetch(input, newInit);

    return apiToJson<T>()(res);
  };

export const getAuthFetcher =
  <T extends Record<string, unknown>>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = injectHeaders(await getAuthorizationHeaders(), init);

    return getFetcher<T>()(input, newInit);
  };

export const getAuthorizationHeaders = async (): Promise<HeadersInit> => {
  const session = await auth();
  // TODO: handle expired token
  if (session) {
    return { Authorization: `Bearer ${session.token}` };
  }

  return {};
};

const injectHeaders = (headers: HeadersInit, init?: RequestInit): RequestInit => {
  let toReturn: RequestInit = {};

  if (init) {
    toReturn = init;
  }

  if (!toReturn.headers) {
    toReturn.headers = {};
  }

  toReturn.headers = {
    ...headers,
    ...toReturn.headers,
  };

  return toReturn;
};
