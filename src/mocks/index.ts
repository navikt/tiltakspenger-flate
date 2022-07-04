import { mockHttp } from './browser';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { server } = require('./server');
  server.listen();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { mockHttp } = require('./browser');
  mockHttp();
}
