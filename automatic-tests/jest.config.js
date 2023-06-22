const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
  },
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
