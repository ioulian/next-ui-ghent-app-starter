import { auth } from "@/auth";

/**
 * Request statusses to be used in data fetching flow
 */
export type API_REQUEST_STATUS = "idle" | "loading" | "succeeded" | "failed";

/**
 * Will handle conversion of responses from fetch to (typed) objects
 */
export const apiToJson =
  <TResponse extends Record<string, unknown>>() =>
  (res: Response): Promise<TResponse> => {
    const contentType = res.headers.get("content-type");

    if (res.ok) {
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
            reject({ error: res.status });
          });
      });
    }

    // Handle errors
    return new Promise((resolve, reject) => {
      res
        .json()
        .then((json) => {
          reject(json);
        })
        .catch(() => {
          reject({ error: res.status });
        });
    });
  };

/**
 * Will return application/json accept and content-type headers as we mostly work with json
 */
export const getContentTypeHeaders = (): HeadersInit => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

/**
 * Helper function to validate the json response (basic). Will look for specific keys in the response and fail if they are not provided.
 *
 * @param keys Keys to look for in the response object
 * @param errorMessage Error message to return when the check fails
 */
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

/**
 * General (typed) fetcher of the application, will inject needed headers and try to return (typed) parsed json response object.
 */
export const getFetcher =
  <T extends Record<string, unknown>>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = injectHeaders(getContentTypeHeaders(), init);
    const res = await fetch(input, newInit);

    return apiToJson<T>()(res);
  };

/**
 * Wrapper for getFetcher to be used for getting protected data where Authorization header(s) are needed.
 */
export const getAuthFetcher =
  <T extends Record<string, unknown>>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = injectHeaders(await getAuthorizationHeaders(), init);

    return getFetcher<T>()(input, newInit);
  };

/**
 * Will return correct Authorization header with JWT access token (if the user is logged in)
 */
export const getAuthorizationHeaders = async (): Promise<HeadersInit> => {
  const session = await auth();
  // TODO: handle expired token
  if (session) {
    return { Authorization: `Bearer ${session.access_token}` };
  }

  return {};
};

/**
 * Helper function to inject headers to existing RequestInit
 *
 * @param headers Headers to inject
 * @param init
 */
const injectHeaders = (headers: HeadersInit, init?: RequestInit): RequestInit => {
  let toReturn: RequestInit = {};

  if (init) {
    toReturn = init;
  }

  // TODO: test of this works: `toReturn.headers ??= {}`
  if (!toReturn.headers) {
    toReturn.headers = {};
  }

  toReturn.headers = {
    ...headers,
    ...toReturn.headers,
  };

  return toReturn;
};
