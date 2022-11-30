module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist/**/*'],
  rules: {


    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: false,
        printWidth: 80,
        quoteProps: 'consistent',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'none'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none']
      }
    ]
  }
}