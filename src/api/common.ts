export const backendUrl = 'https://tpts-tiltakspenger-mottak.dev.intern.nav.no';

const getBody = async (res: Response) => {
  if (res.headers.get('content-type') === 'application/json') {
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
