import express, { Express } from 'express';
import path from 'path';
import { dirname } from 'path';
import { logger } from './logger.js';
import { getToken } from './azureObo.js';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { fileURLToPath } from 'url';
const currentDir = fileURLToPath(import.meta.url);
const __dirname = dirname(currentDir);

export const setupRouting = (app: Express) => {
  app.use(express.static(path.join(__dirname, '../../build')));

  app.use('*', async (req, res, next) => {
    logger.debug(`${req.method} ${req.baseUrl + req.path}`);
    next();
  });

  app.use('/api/*', async (req, res, next) => {
    try {
      const token =
        (req.headers['authorization'] || '').split('Bearer ')[1] || undefined;
      if (!token) throw Error('No auth header');
      req.headers['authorization'] = `Bearer ${await getToken(token)}`;
    } catch (error: any) {
      logger.error(error);
      console.log(error);
    } finally {
      next();
    }
  });

  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://host.docker.internal:8081', //'https://tpts-tiltakspenger-mottak.dev.intern.nav.no/',
      changeOrigin: true,
    })
  );

  app.get('*', (req, res) => {
    req.url = '/index.html';
    logger.info('Redirecting to /index.html');
    (app as any).handle(req, res);
  });
};
