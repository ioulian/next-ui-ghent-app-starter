// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: [
    "@typescript-eslint",
    "i18next",
    "jsx-a11y",
    "sonarjs",
    "react-hooks",
    "@stylistic",
    "jest",
    "jest-dom",
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:i18next/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    "jest/globals": true,
  },
  rules: {
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "sonarjs/no-duplicate-string": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "const",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "let",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "if",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "block",
        next: "return",
      },
    ],
    "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
    quotes: ["error", "double", { allowTemplateLiterals: false, avoidEscape: true }],
    curly: ["error", "all"],
    "object-shorthand": "error",
    "nonblock-statement-body-position": ["error", "below"],
    "react/button-has-type": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/no-invalid-html-attribute": "error",
    "react/no-object-type-as-default-prop": "error",
    "react/self-closing-comp": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-no-target-blank": ["error", { warnOnSpreadAttributes: true }],
    "no-constant-binary-expression": "error",
    "sonarjs/cognitive-complexity": "off",
  },
  settings: {
    linkComponents: ["Link"],
  },
};

module.exports = config;
