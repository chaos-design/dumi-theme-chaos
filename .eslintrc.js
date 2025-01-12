module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    'react/no-unknown-property': 'off',
    'react/no-clone-element': 'off',
    'react/no-children-for-each': 'off',
    'react/no-children-count': 'off',
    'react/no-children-map': 'off',
    'react/no-children-only': 'off',
    'react/no-unstable-default-props': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
};
