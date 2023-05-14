module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'airbnb',
    // 'airbnb/hooks',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript',
    // 'plugin:jsx-a11y/recommended',
    // 'plugin:jest/recommended',
    // 'plugin:jest/style',
    // 'plugin:react/jsx-runtime',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    semi: [2, 'never'],
    indent: [
      'error',
      2,
    ],
    'max-len': ['error', {
      code: 144,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    'no-console': 'off',

  },
}
