import request from 'supertest';
import express from 'express';
import { setupRouting } from './routing';

const mockMiddleware = jest.fn();

jest.mock('http-proxy-middleware', () => ({
  createProxyMiddleware: () => mockMiddleware,
}));

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn(() => {
    return Promise.resolve({
      ok: true,
      headers: new Map()
        .set(Authorization, 'oldToken')
        .set('content-type', 'application/json'),
      json: () => Promise.resolve({ access_token: 'newToken' }),
    });
  }),
}));

const Authorization = 'authorization';
const ContentType = 'content-type';

describe('ob-behalf-of flow', () => {
  const app = express();
  let testWrapper: request.SuperTest<request.Test>;

  beforeAll(async () => {
    setupRouting(app);
    testWrapper = request(app);
  });

  beforeEach(() => {
    mockMiddleware.mockClear();
  });

  it('should replace auth header on api/*', async () => {
    let authHeader: string | undefined;
    mockMiddleware.mockImplementationOnce((req, res) => {
      authHeader = req.headers[Authorization];
      res.send();
    });

    await testWrapper
      .get('/api/soknad')
      .set(Authorization, 'Bearer token')
      .set(ContentType, 'application/json')
      .expect(200);

    expect(authHeader).toBe('Bearer newToken');
  });

  it('should not use obo-middleware on /index.html', async () => {
    await testWrapper.get('/index.html').expect(200);
    expect(mockMiddleware).not.toHaveBeenCalled();
  });
});
