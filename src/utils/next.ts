export const getBuildId = (): string | "development" => {
  if (process.env.IS_STORYBOOK === "true") {
    return "development";
  }

  return process.env.NODE_ENV === "development" ? "development" : process.env.NEXT_CUSTOM_BUILD_ID!;
};
