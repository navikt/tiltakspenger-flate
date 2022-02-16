import { Response as FetchResponse } from 'node-fetch';

export const getBody = (res: FetchResponse): Promise<Record<string, any>> => {
  const contentType = res.headers.get('content-type');
  if (contentType?.startsWith('application/json')) {
    return res.json() as Promise<Record<string, any>>;
  }
  throw Error('Unknown content-type');
};
