module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': ['error', {endOfLine: 'off'}],
      },
    },
  ],
};