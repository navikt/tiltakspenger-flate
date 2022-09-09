import { getToken } from '../../server/azureObo';
import { getConfig } from '../../server/config';
import logger from '../../server/logger';
import { NextApiRequest, NextApiResponse } from 'next';

const Authorization = 'authorization';
const backendUrl = getConfig();
const tokenRegex = /^Bearer (?<token>(\.?([A-Za-z0-9-_]+)){3})$/m;

const extractToken = (req: NextApiRequest) => {
  const authHeader = req.headers[Authorization]
  if (!authHeader) throw new Error('No authorization header was found');
  const token = authHeader.match(tokenRegex)?.groups?.token
  if (!token) throw new Error('Invalid authorization header');
  return token;
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
    logger.error('Her kommer det en feil');
    logger.error(err);
    logger.error( {err});
    logger.error("Error: ", err);
    response.status(500).json({ message: 'Internal server error' });
  }
}

export default middleware;
