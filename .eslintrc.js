module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    browser: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/no-unused-state': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^h$',
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
