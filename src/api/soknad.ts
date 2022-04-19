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

export const getSoknaderByIdent = (
  ident: string
): Promise<Paginated<Soknad>> => {
  return HTTP.GET(`${backendUrl}/api/soknad?ident=${ident}`);
};
export const getSoknader = ({
  offset,
  pageSize,
}: {
  offset?: number;
  pageSize?: number;
} = {}): Promise<Paginated<Soknad>> => {
  return HTTP.GET(
    `${backendUrl}/api/soknad?offset=${offset || 0}&pageSize=${pageSize || 20}`
  );
};
