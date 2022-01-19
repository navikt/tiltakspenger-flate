import { backendUrl, HTTP } from './common';

export interface SoknadList {
  soknadId: number;
  opprettet: null | string;
  fnr: string;
  navn: string;
  typeTiltak: null | string;
  tiltaksNavn: null | string;
  tiltakFom: null | string;
  tiltakTom: null | string;
  statusSoknad: string;
}

export const getSoknader = (): Promise<SoknadList[]> => {
  return HTTP.GET(`${backendUrl}/api/soknad`);
};
