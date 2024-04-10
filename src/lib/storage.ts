import { Storage, createStorage } from "unstorage";

// From: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/lib/mongodb.ts

let storage: Storage<string>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithStorage = global as typeof globalThis & {
    _storage?: Storage<string>;
  };

  if (!globalWithStorage._storage) {
    globalWithStorage._storage = createStorage<string>();
  }
  storage = globalWithStorage._storage;
} else {
  // In production mode, it's best to not use a global variable.
  storage = createStorage<string>();
}

export default storage;
