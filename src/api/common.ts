import { useState } from 'react';
import mockData from '../mocks';
import any = jasmine.any;

// export const backendUrl = 'https://tpts-tiltakspenger-mottak.dev.intern.nav.no';
export const backendUrl = '';

const getBody = async (res: Response) => {
  if (res.headers.get('content-type')?.startsWith('application/json')) {
    return res.json();
  }
  return res.text();
};

const realHTTP = {
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
  const [error, setError] = useState<any>();

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

const mockHTTP: typeof realHTTP = {
  GET: (url: string, config?: RequestInit) => Promise.resolve(mockData[url]),
};

let usedHTTP: typeof realHTTP;
if (import.meta.env.MODE === 'mock') {
  console.log('Using mock');
  usedHTTP = mockHTTP;
} else {
  console.log('Using fetch');
  usedHTTP = realHTTP;
}
export const HTTP = usedHTTP;
