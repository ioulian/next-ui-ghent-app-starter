#!/usr/bin/env node

import path from "path";

import { loadEnvConfig } from "@next/env";

import { getErrorMessage } from "./utils";
import defaultManifest from "./../src/app/manifest";

loadEnvConfig(path.join(__dirname, "./.."), false);

// Set to "false" to test builds locally, remember to turn it back on!
const SHOULD_FAIL_ON_ERROR = false;

// Keep track of errors
let envFileError = false;
let manifestFileError = false;

// Check if user has forgot to change NEXT_PUBLIC_SITE_URL
if (
  typeof process.env.NEXT_PUBLIC_SITE_URL === "undefined" ||
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("http://localhost") ||
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("https://localhost")
) {
  envFileError = true;
  console.error(
    getErrorMessage(
      "NEXT_PUBLIC_SITE_URL is still set to LOCALHOST, please set this to the correct URL!",
    ),
  );
}

// Check if user has forgot to change NEXTAUTH_SECRET
if (typeof process.env.NEXTAUTH_SECRET !== "string") {
  envFileError = true;
  console.error(getErrorMessage("NEXTAUTH_SECRET is not defined!"));
} else if (process.env.NEXTAUTH_SECRET.length < 32) {
  envFileError = true;
  console.error(getErrorMessage("NEXTAUTH_SECRET is not strong enough!"));
}

// Check if manifest file contains default values
const manifestValues = defaultManifest();
if (
  (typeof manifestValues.name === "string" && manifestValues.name === "iO Ghent") ||
  (typeof manifestValues.short_name === "string" && manifestValues.short_name === "iO Ghent") ||
  (typeof manifestValues.description === "string" &&
    manifestValues.description === "iO Ghent Next.js starter kit")
) {
  manifestFileError = true;
  console.error(
    getErrorMessage("./src/app/manifest.ts contains default values, do not forget to update them!"),
  );
}

if ((envFileError === true || manifestFileError) && SHOULD_FAIL_ON_ERROR) {
  process.exit(1);
}

export {};
