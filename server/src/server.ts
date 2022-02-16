import 'dotenv/config';
import path from 'path';
import { dirname } from 'path';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { getToken } from './azureObo.js';
import { logger } from './logger.js';

const app = express();
const port = 8080;

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
    req.headers['authorization'] = await getToken(token);
  } catch (error: any) {
    logger.error(error);
  } finally {
    next();
  }
});

app.use(
  '/api/*',
  createProxyMiddleware({
    target: 'https://tpts-tiltakspenger-mottak.dev.intern.nav.no/',
    changeOrigin: true,
  })
);

app.get('*', (req, res) => {
  req.url = '/index.html';
  logger.info('Redirecting to /index.html');
  (app as any).handle(req, res);
});

app.listen(port);
logger.info(`Listening to port ${port}...`);
