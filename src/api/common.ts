import { useState } from 'react';
import { ResultStatusType } from 'antd/es/result';

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

interface RequestError {
  status: ResultStatusType;
  message: string;
}

export const useRequest = <T>(doFetch: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<T | undefined>();
  const [error, setError] = useState<RequestError | undefined>();

  const run = async () => {
    try {
      setIsLoading(true);
      const result = await doFetch();
      setResult(result);
    } catch (e) {
      setError(
        (e as { body: RequestError | null })?.body || (e as RequestError)
      );
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
