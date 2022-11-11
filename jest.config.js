/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    // "^.+\\.[jt]sx?$": "babel-jest",
    "^.+\\.[jt]sx?$": "<rootDir>/build/src/index.js",
  },
  collectCoverageFrom: ["**/*.{js,jsx}", "!/node_modules/s**", "!/build/**"],
};
