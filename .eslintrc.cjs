/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  'prefer-destructuring': 'warn',
  'newline-before-return': 'warn',
  'arrow-body-style': ['error', 'as-needed'],
  'no-console': ['error', { allow: ['warn', 'error'] }],
  '@typescript-eslint/no-unused-vars': 'error',
  'react-hooks/exhaustive-deps': 'off',
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-filename-extension': [
    2,
    {
      extensions: ['.tsx', '.mdx'],
    },
  ],
  'no-relative-import-paths/no-relative-import-paths': [
    'error',
    { allowSameFolder: false, rootDir: 'src', prefix: '~' },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type'],
      pathGroups: [
        {
          pattern: 'react',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '~/molecules/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '~/components/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '~/utils/**',
          group: 'internal',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: ['type'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};

/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'plugin:react/recommended',
    'next',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  rules,
  plugins: ['no-relative-import-paths'],
  ignorePatterns: ['src/*.css'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'separate-type-imports',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
      rules: {
        semi: 0,
      },
    },
    {
      files: ['*.stories.**'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
