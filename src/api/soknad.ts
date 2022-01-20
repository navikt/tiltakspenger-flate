import { backendUrl, HTTP } from './common';

export type SoknadStatus = 'Behandlet' | 'Ikke behandlet' | 'Avslag';

export interface Soknad {
  soknadId: number;
  opprettet: null | string;
  fnr: string;
  navn: string;
  typeTiltak: null | string;
  tiltaksNavn: null | string;
  tiltakFom: null | string;
  tiltakTom: null | string;
  statusSoknad: SoknadStatus;
}

export const getSoknad = (soknadId: string): Promise<Soknad> => {
  return HTTP.GET(`${backendUrl}/api/soknad/${soknadId}`);
};

export const getSoknader = (
  status: SoknadStatus | null = null
): Promise<Soknad[]> => {
  return HTTP.GET(
    `${backendUrl}/api/soknad${status ? '?statusSoknad=' + status : ''}`
  );
};
