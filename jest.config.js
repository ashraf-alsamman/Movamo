const { defaults: tsjPreset } = require('ts-jest/jest-preset');

module.exports = {
  ...tsjPreset,
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?|react-redux|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  testPathIgnorePatterns: ['<rootDir/node_modules/', '@react-native', '/e2e'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
