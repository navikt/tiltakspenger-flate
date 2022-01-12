import { setupWorker } from 'msw';
import { getMockHandlers } from './handlers';

export const mockHttp = () => {
  const worker = setupWorker(...getMockHandlers());
  return worker.start();
};
