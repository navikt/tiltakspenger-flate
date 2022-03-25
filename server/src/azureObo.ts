import fetch from 'node-fetch';
import { getBody } from './httpUtils.js';

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
  access_token: string;
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
  });

  const resBody = await getBody(res);

  if (!res.ok)
    return Promise.reject({
      status: res.status,
      content: res.headers.get('content-type'),
      body: resBody,
    });

  return (resBody as unknown as TokenResponse).access_token;
};

let cachedOboToken: string | undefined = undefined;
export const getToken = async (token: string) => {
  if (cachedOboToken !== undefined) return Promise.resolve(cachedOboToken);
  const oboToken = await onBehalfOfGrant(token);
  cachedOboToken = oboToken;
  return oboToken;
};
