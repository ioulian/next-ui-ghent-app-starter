module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx|mjs)": () => "npm run tsc --noEmit",

  // This will lint and format TypeScript and JavaScript files
  "**/*.(ts|tsx|js|mjs)": (filenames) => [
    `npm run eslint --fix ${filenames.join(" ")}`,
    `npm run prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => `npm run prettier --write ${filenames.join(" ")}`,
};
