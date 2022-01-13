import { setupServer } from 'msw/node';
import { getMockHandlers } from './handlers';
// Import fetch polyfill here and not in setupTests because
// not all tests require the polyfill but all tests using msw requires the polyfill
import 'whatwg-fetch';

export const setupTestMockServer = () => {
  return setupServer(...getMockHandlers());
};
