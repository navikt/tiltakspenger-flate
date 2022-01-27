import { useState } from 'react';

export const backendUrl = '';

const getBody = async (res: Response) => {
  if (res.headers.get('content-type')?.startsWith('application/json')) {
    return res.json();
  }
  return res.text();
};

export const HTTP = {
  GET: (url: string, config?: RequestInit) =>
    fetch(url, config).then(async (res) => {
      if (!res.ok)
        return Promise.reject({
          body: await getBody(res),
          status: res.status,
        });

      return getBody(res);
    }),
};

export const useRequest = <T>(doFetch: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [result, setResult] = useState<T | undefined>();
  const [error, setError] = useState<unknown>();

  const run = async () => {
    try {
      const result = await doFetch();
      setResult(result);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    run,
    isLoading,
    result,
    error,
  };
};

export type Paginated<T> = {
  data: T[];
  offset: number;
  pageSize: number;
  total: number;
};
