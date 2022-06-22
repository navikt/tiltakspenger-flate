interface Config {
  oboScope: string;
  backendUrl: string;
  clientId: string;
  clientSecret: string;
}

const devConfig: Config = {
  oboScope: 'api://eafda703-c821-44de-990c-950dec1ad22f/.default',
  backendUrl: 'https://tiltakspenger-vedtak.dev.intern.nav.no',
  clientId: process.env.AZURE_APP_CLIENT_ID!,
  clientSecret: process.env.AZURE_APP_CLIENT_SECRET!,
};

const prodConfig: Config = {
  oboScope: 'api://<prod-client-id>/.default',
  backendUrl: 'Prod url here',
  clientId: process.env.AZURE_APP_CLIENT_ID!,
  clientSecret: process.env.AZURE_APP_CLIENT_SECRET!,
};

export const getConfig = (): Config => {
  const env = process.env.NAIS_CLUSTER_NAME;
  return env === 'prod-gcp' ? prodConfig : devConfig;
};
