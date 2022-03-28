import express, { Express, Response, Request } from 'express';
import path from 'path';
import { dirname } from 'path';
import { logger } from './logger.js';
import { getToken } from './azureObo.js';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { fileURLToPath } from 'url';
const currentDir = fileURLToPath(import.meta.url);
const __dirname = dirname(currentDir);
const backendUrl = process.env['BACKEND_URL'];

export const setupRouting = (app: Express) => {
  app.use('*', async (req, res, next) => {
    logger.debug(`${req.method} ${req.baseUrl + req.path}`);
    next();
  });
  app.use((error: Error, req: unknown, res: Response, next: () => void) => {
    logger.error(error);
    res.status(500).send('Internal server error');
  });

  app.use(express.static(path.join(__dirname, '../../build')));

  app.use('/api/*', async (req, res, next) => {
    try {
      const token =
        (req.headers['authorization'] || '').split('Bearer ')[1] || undefined;
      if (!token) throw Error('No auth header');
      const oboToken = await getToken(token);
      req.headers['authorization'] = `Bearer ${oboToken}`;
    } catch (error) {
      logger.error(error);
    } finally {
      next();
    }
  });

  app.use(
    '/api/*',
    createProxyMiddleware({
      target: backendUrl,
      changeOrigin: true,
    })
  );

  app.get('*', (req, res) => {
    req.url = '/index.html';
    logger.info('Redirecting to /index.html');
    (
      app as unknown as { handle: (req: Request, res: Response) => void }
    ).handle(req, res);
  });
};
