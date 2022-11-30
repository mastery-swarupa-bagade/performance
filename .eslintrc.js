module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard", "plugin:cypress/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    semi: ["error", "always"],
    quotes: "off",
    "comma-dangle": ["error", "always-multiline"],
    "cypress/no-unnecessary-waiting": "off",
    "spaced-comment": ["error", "never"],
    "eol-last": "off",
    eqeqeq: 0,
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    "object-shorthand": ["error", "never"]
  },
  ignorePatterns: [
    "node_modules/",
    ".husky/pre-commit",
    "convert.js",
    "jsontoxls.js",
    "cypress/reports/",
    "cypress/results/",
    ".eslintrc.js"
  ]
};
