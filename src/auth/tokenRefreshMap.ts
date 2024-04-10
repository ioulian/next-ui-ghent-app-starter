let tokenRefreshMap: Record<string, boolean>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithTokenRefreshMap = global as typeof globalThis & {
    _tokenRefreshMap?: Record<string, boolean>;
  };

  if (!globalWithTokenRefreshMap._tokenRefreshMap) {
    globalWithTokenRefreshMap._tokenRefreshMap = {};
  }
  tokenRefreshMap = globalWithTokenRefreshMap._tokenRefreshMap;
} else {
  // In production mode, it's best to not use a global variable.
  // TODO: this could be a problem with memory leak if not correctly cleaned up!
  tokenRefreshMap = {};
}

export default tokenRefreshMap;
