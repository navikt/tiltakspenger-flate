/* eslint-disable @typescript-eslint/no-non-null-assertion */

interface Config {
  oboScope: string;
  backendUrl: string;
  clientId: string;
  clientSecret: string;
}

const baseConfig = {
  clientId: process.env.AZURE_APP_CLIENT_ID!,
  clientSecret: process.env.AZURE_APP_CLIENT_SECRET!,
};

const devConfig: Config = {
  ...baseConfig,
  oboScope: 'api://eafda703-c821-44de-990c-950dec1ad22f/.default',
  backendUrl: 'https://tiltakspenger-vedtak.dev.intern.nav.no',
};

const prodConfig: Config = {
  ...baseConfig,
  oboScope: 'api://9dd72d44-f3f7-48d1-846b-94f317d10119/.default',
  backendUrl: 'https://tiltakspenger-vedtak.prod.intern.nav.no',
};

export const getConfig = (): Config => {
  const env = process.env.NAIS_CLUSTER_NAME;
  return env === 'prod-gcp' ? prodConfig : devConfig;
};
