import { backendUrl, HTTP, Paginated } from './common';

export type SoknadStatus = 'Behandlet' | 'Ikke behandlet' | 'Avslag';

export interface Soknad {
  id: string;
  opprettet: null | string;
  ident: string;
  fornavn: string;
  etternavn: string;
  brukerRegistrertStartDato: string | null;
  brukerRegistrertSluttDato: string | null;
  systemRegistrertStartDato: string | null;
  systemRegistrertSluttDato: string | null;
}

export const getSoknader = (ident: string): Promise<Paginated<Soknad>> => {
  return HTTP.GET(`${backendUrl}/api/soknad?ident=${ident}`);
};
