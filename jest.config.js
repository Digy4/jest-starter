// jest.config.js
export default {
  testEnvironment: "node",
  reporters: [
    "default",
    ["@digy4/digyrunner-jest/DigyRunnerJestReporter", { outputFile: "./test-results.json" }]
  ]
};
