import { backendUrl, HTTP, Paginated } from './common';

export type SoknadStatus = 'Behandlet' | 'Ikke behandlet' | 'Avslag';

export interface Soknad {
  id: number;
  opprettet: null | string;
  fnr: string;
  fornavn: string;
  etternavn: string;
  typeTiltak: null | string;
  brukerStartDato: string | null;
  brukerSluttDato: string | null;
  tiltaksNavn: null | string;
  tiltakFom: null | string;
  tiltakTom: null | string;
  statusSoknad: SoknadStatus;
  identer: string[];
}

export const getSoknad = (soknadId: string): Promise<Soknad> => {
  return HTTP.GET(`${backendUrl}/api/soknad/${soknadId}`);
};

export const getSoknader = (
  status: SoknadStatus | null = null
): Promise<Paginated<Soknad>> => {
  return HTTP.GET(
    `${backendUrl}/api/soknad${status ? '?statusSoknad=' + status : ''}`
  );
};
