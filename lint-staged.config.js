module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx|mjs)": () => "yarn tsc --noEmit",

  // This will lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx|js|mjs)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => `yarn prettier --write ${filenames.join(" ")}`,
};
