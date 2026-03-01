/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:mdx/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "no-relative-import-paths"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    extraFileExtensions: [".md", ".mdx"],
  },
  rules: {
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: false, rootDir: "src", prefix: "@" },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      rules: {
        "@typescript-eslint/no-misused-promises": [
          2,
          { checksVoidReturn: { attributes: false } },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { prefer: "type-imports", fixStyle: "separate-type-imports" },
        ],
      },
    },
    {
      files: ["*.mdx", "*.md"],
      extends: "plugin:mdx/recommended",
      rules: {
        "react/no-unescaped-entities": "off",
        "no-relative-import-paths/no-relative-import-paths": "off",
      },
    },
  ],
  env: {
    es2022: true,
    node: true,
    browser: true,
  },

  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "**/.eslintrc.cjs",
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
    "scripts/**",
    ".next",
    "dist",
    "pnpm-lock.yaml",
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
