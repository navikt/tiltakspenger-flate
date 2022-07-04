import { getToken } from '../../../server/src/azureObo';
import { getConfig } from '../../../server/src/config';
import { NextRequest } from 'next/server';
import { logger } from '../../../server/src/logger';

const Authorization = 'authorization';
const backendUrl = getConfig();

const extractToken = (req: Request) =>
  req.headers[Authorization]?.split(' ')[1];

const getUrl = async (req: NextRequest): Promise<string> => {
  const apiUrl = (await backendUrl).backendUrl;
  const path = req.url.replace('/api', '');
  return apiUrl + path;
};

export async function middleware(req: NextRequest, response) {
  try {
    const oboToken = await getToken(extractToken(req));
    const url = await getUrl(req);
    const res = await fetch(url, {
      method: req.method,
      body: req.method === 'GET' ? undefined : req.body,
      headers: {
        'content-type': 'application/json',
        [Authorization]: `Bearer ${oboToken}`,
      },
    });
    const body = await (res.status === 200 ? res.json() : res.text());
    response.status(res.status).json(body);
  } catch (err) {
    logger.error(err);
    response.status(500).json({ message: 'Internal server error' });
  }
}

export default middleware;
