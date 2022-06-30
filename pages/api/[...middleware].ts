import { getToken } from '../../server/src/azureObo';
import { getConfig } from '../../server/src/config';
import { NextRequest, NextResponse } from 'next/server';

const Authorization = 'authorization';
const backendUrl = getConfig();

const extractToken = (req: Request) =>
  req.headers[Authorization]?.split(' ')[1];

const getUrl = async (req: NextRequest): Promise<string> => {
  const apiUrl = (await backendUrl).backendUrl;
  const path = req.url.replace('/api', '');
  console.log(apiUrl + path);
  return apiUrl + path;
};
/*
export const middleware = async (req: Request) => {
  try {
    const oboToken = await getToken(extractToken(req));
    return fetch(await getUrl(req), {
      headers: {
        ...req.headers,
        ['Authorization']: `Bearer ${oboToken}`,
      },
      method: req.method,
      body: req.body,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: err,
    });
  }
};*/

export async function middleware(req: NextRequest, response) {
  try {
    const oboToken = await getToken(extractToken(req));
    const url = await getUrl(req);
    console.log(req.headers);
    const res = await fetch(url, {
      headers: {
        ...req.headers,
        'content-type': 'application/json',
        [Authorization]: `Bearer ${oboToken}`,
      },
    });
    const body = await (res.status === 200 ? res.json() : res.text());
    console.log('Response status', res.status);
    console.log('Body', body);
    response.status(res.status).json(body);
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: 'Internal server error' });
  }
}

export default middleware;
