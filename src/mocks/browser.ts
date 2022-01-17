import { setupWorker } from 'msw';
import { getMockHandlers } from './handlers';
import { basePath } from '../routes';

export const mockHttp = () => {
  const worker = setupWorker(...getMockHandlers());
  return worker.start({
    serviceWorker: {
      url: basePath + 'mockServiceWorker.js',
    },
  });
};
