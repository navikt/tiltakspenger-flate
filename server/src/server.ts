import 'dotenv/config';
import express from 'express';
import { logger } from './logger.js';
import { setupRouting } from './routing.js';

const app = express();
const port = 8080;

app.listen(port);
logger.info(`Listening to port ${port}...`);

setupRouting(app);
export const expressApp = app;
