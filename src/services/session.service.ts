import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import storage from "@/lib/storage";

/**
 * Will init session cookie if none exists
 *
 * TODO: we probably want to extend this cookie each time the user logins, or maybe more frequently?
 *
 * @param req Next request
 * @param res Next response
 */
export const initSession = (req: NextRequest, res: NextResponse): void => {
  // Do nothing if cookie name does not exist
  if (
    typeof process.env.SESSION_COOKIE_NAME !== "string" ||
    typeof process.env.SESSION_COOKIE_MAX_AGE !== "string"
  ) {
    return;
  }

  const sessionCookieId = req.cookies.get(process.env.SESSION_COOKIE_NAME);

  if (typeof sessionCookieId === "undefined") {
    // Set new session cookie if nothing is found
    const newSessionID = self.crypto.randomUUID();
    res.cookies.set({
      name: process.env.SESSION_COOKIE_NAME,
      value: newSessionID,
      path: "/",
      sameSite: "lax",
      expires: Date.now() + parseInt(process.env.SESSION_COOKIE_MAX_AGE, 10) * 24 * 60 * 60 * 1000, // Convert miliseconds to days
      httpOnly: true,
      secure: true,
    });
  }
};

/**
 * @returns Session ID from cookie
 */
export const getSessionId = (): string | undefined => {
  if (typeof process.env.SESSION_COOKIE_NAME !== "string") {
    return;
  }

  return cookies().get(process.env.SESSION_COOKIE_NAME)?.value;
};

/**
 * Will get a specific value from session for current user
 *
 * @param key Key of the item to get
 */
export const getFromSessionStorage = async (key: string): Promise<string | undefined> => {
  const sessionId = getSessionId();
  if (!sessionId) {
    return undefined;
  }

  const result = await storage.getItem<string>(`${sessionId}:${key}`);

  if (result === null) {
    return undefined;
  }

  return result;
};

/**
 * Will set a value in session for current user
 *
 * @param key Key of the item
 * @param value Data
 */
export const setToSessionStorage = async (key: string, value: string): Promise<void> => {
  const sessionId = getSessionId();
  if (!sessionId) {
    return;
  }

  await storage.setItem(`${sessionId}:${key}`, value);
  revalidatePath("/");
};

/**
 * Removes item form session storage for current user
 *
 * @param key Key of the item
 */
export const removeFromSessionStorage = async (key: string): Promise<void> => {
  const sessionId = getSessionId();
  if (!sessionId) {
    return;
  }

  await storage.removeItem(`${sessionId}:${key}`, { removeMeta: true });
  revalidatePath("/");
};
