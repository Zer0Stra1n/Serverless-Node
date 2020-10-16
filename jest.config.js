module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'test/coverage',
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 70,
      lines: 80,
      branches: 50,
      functions: 50,
    },
  },
  verbose: false,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'ts',
    'json',
    'js',
  ],
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {outputDirectory: 'test/coverage/junit', outputName: 'test.xml'},
    ],
  ],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/jest-setup.js'],
};
