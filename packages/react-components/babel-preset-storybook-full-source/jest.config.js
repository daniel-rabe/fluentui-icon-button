// @ts-check

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  displayName: 'babel-preset-storybook-full-source',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: true,
      },
    ],
  },
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['./config/tests.js'],
};
