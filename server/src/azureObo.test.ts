import request from 'supertest';
import express from 'express';
import { setupRouting } from './routing';

const app = express();
setupRouting(app);

describe('ob-behalf-of flow', () => {
  it('should be replace auth header', () => {});
});
