import { getToken } from '../../server/azureObo';
import { getConfig } from '../../server/config';
import logger from '../../server/logger';
import { NextApiRequest, NextApiResponse } from 'next';

const Authorization = 'authorization';
const backendUrl = getConfig();

const extractToken = (req: NextApiRequest) => {
  const header = req.headers[Authorization]?.split(' ')[1];
  if (!header) throw new Error('Invalid authorization header');
  return header;
};

const getUrl = async (req: NextApiRequest): Promise<string> => {
  const apiUrl = (await backendUrl).backendUrl;
  const path = req?.url?.replace('/api', '');
  return apiUrl + path;
};

export async function middleware(
  req: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
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
