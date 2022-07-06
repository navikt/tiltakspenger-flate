export const getBody = (res: Response): Promise<Record<string, unknown>> => {
  const contentType = res.headers.get('content-type');
  if (contentType?.startsWith('application/json')) {
    return res.json() as Promise<Record<string, unknown>>;
  }
  throw Error('Unknown content-type');
};
