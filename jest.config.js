export default {
  moduleNameMapper: {
    '^(@(?!typescript-eslint/types).*)$': '<rootDir>/node_modules/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
}
