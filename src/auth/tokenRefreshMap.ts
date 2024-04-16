export type TokenRefreshMapType = Map<string, boolean>;

let tokenRefreshMap: TokenRefreshMapType;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithTokenRefreshMap = global as typeof globalThis & {
    _tokenRefreshMap?: TokenRefreshMapType;
  };

  if (!globalWithTokenRefreshMap._tokenRefreshMap) {
    globalWithTokenRefreshMap._tokenRefreshMap = new Map<string, boolean>();
  }
  tokenRefreshMap = globalWithTokenRefreshMap._tokenRefreshMap;
} else {
  // In production mode, it's best to not use a global variable.
  // TODO: this could be a problem with memory leak if not correctly cleaned up!
  tokenRefreshMap = new Map<string, boolean>();
}

export default tokenRefreshMap;
