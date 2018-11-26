module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'function-paren-newline': 'off', // Incompatible with prettier
    'space-before-function-paren': 0, // Incompatible with prettier
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',

    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': 'off', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off', // Not our taste?
    radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.
    'no-prototype-builtins': 'off',

    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/jsx-one-expression-per-line': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
