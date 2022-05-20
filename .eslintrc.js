module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-unused-expressions": "off",
    "no-new": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
  },
  plugins: ["jest", "@typescript-eslint"],
};
