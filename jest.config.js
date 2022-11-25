module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy"
  },
  resetMocks: false,
  // clearMocks: true,
  // restoreMocks: true,
  setupFiles: [
    "./src/tests/mocks/mockStorage.mock.js",
    "jest-localstorage-mock"
  ]
};
