import { setupServer } from 'msw/node';
import { getMockHandlers } from './handlers';

export const server = setupServer(...getMockHandlers());
