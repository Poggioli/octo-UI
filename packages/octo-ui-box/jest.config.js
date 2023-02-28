const sharedConfig = require("../../jest.config.js");

module.exports = {
  ...sharedConfig,
  rootDir: "./",
  collectCoverageFrom: [
    './src/**',
    '!./src/**/styles.ts(x)?',
    '!./src/**/*stories.ts(x)?',
    '!./src/**/types.ts(x)?',
    '!./src/**/values.ts(x)?',
    '!./src/**/__snapshots__/**/*',
  ],
};
