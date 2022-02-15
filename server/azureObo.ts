import fetch from 'node-fetch';

const url = (tenant: string) =>
  `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;
const tenant = '966ac572-f5b7-4bbe-aa88-c76419c0f851';

const clientId = process.env.AZURE_APP_CLIENT_ID;
const clientSecret = process.env.AZURE_APP_CLIENT_SECRET;
const scope = process.env.OBO_SCOPE;

const toBody = (token: string) => ({
  grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
  client_id: clientId,
  client_secret: clientSecret,
  assertion: token,
  scope: scope,
  requested_token_use: 'on_behalf_of',
});

interface TokenResponse {
  accessToken: string;
}

const onBehalfOfGrant = async (token: string) => {
  const body = new URLSearchParams();
  const rawBody = toBody(token);
  Object.entries(rawBody).map(([key, entry]) => {
    body.append(key, entry || '');
  });
  const res = await fetch(url(tenant), {
    method: 'POST',
    body,
    headers: {
      ['Content-Type']: 'application/x-www-form-urlencoded',
    },
  }).then((res) => res.json() as Promise<TokenResponse>);
  return res.accessToken;
};

let cachedOboToken: string | undefined = undefined;
export const getToken = async (token: string) => {
  if (cachedOboToken !== undefined) return Promise.resolve(cachedOboToken);
  const oboToken = await onBehalfOfGrant(token);
  cachedOboToken = oboToken;
  return oboToken;
};

const Authorization = 'Authorization';
export const cachedOboExchange = async (req: any, res: any) => {
  const token = req.getHeader(Authorization)?.toString().split('Bearer ')[1];
  if (!token) return req;
  req.setHeader(Authorization, `Bearer ${await getToken(token)}`);
  return req;
};
