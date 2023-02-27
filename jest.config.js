module.exports = {
  // roots: ["<rootDir>/packages/**/src"],
  moduleNameMapper: {},
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  collectCoverage: true,
  silent: true,
  collectCoverageFrom: [
    "packages/**/src/**",
    "!packages/**/src/**/styles.ts(x)",
    "!packages/**/src/**/*stories.ts(x)",
    "!packages/**/src/**/types.ts(x)",
    "!packages/**/src/**/values.ts(x)",
    "!packages/**/src/**/__snapshots__/**/*",
    './src/**',
    '!./src/**/styles.ts',
    '!./src/**/*stories.ts',
    '!./src/**/types.ts',
    '!./src/**/values.ts',
    '!./src/**/__snapshots__/**/*',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
