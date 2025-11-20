module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'app.js',
    '!node_modules/**'
  ],
  testMatch: [
    '**/*.test.js'
  ]
};
