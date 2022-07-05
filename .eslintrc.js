module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
  ],
  rules: {
    '@typescript/no-explicit-any': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
