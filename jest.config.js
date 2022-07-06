// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)().then((config) => {
  return {
    ...config,
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules', 'src/testUtils', 'generated'],
    // A path to a custom resolver
    resolver: `${__dirname}/jestResolvers/uuidFixResolver.js`,
    moduleNameMapper: {
      ...config.moduleNameMapper,
      generated: `${__dirname}/generated`,
    },
    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['./scripts/setupTestEnv.js'],
  };
});
