import { backendUrl, HTTP, Paginated } from './common';
import { Configuration, DefaultApi, PersonDTO } from '../../generated';

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
  deltarIntroduksjonsprogrammet: boolean;
  deltarKvp: boolean;
  oppholdInstitusjon: boolean;
  typeInstitusjon: string | null;
  tiltaksArrangoer: string | null;
  tiltaksType: string | null;
}

export interface PaginationInfo {
  offset?: number;
  pageSize?: number;
}

export const getSoknaderByIdent = (
  ident: string
): Promise<Paginated<Soknad>> => {
  return HTTP.GET(`${backendUrl}/api/saker/person?ident=${ident}`);
};
export const getSoknader = ({ offset, pageSize }: PaginationInfo = {}): Promise<
  Paginated<Soknad>
> => {
  return HTTP.GET(
    `${backendUrl}/api/saker/person?offset=${offset || 0}&pageSize=${
      pageSize || 20
    }`
  );
};

const api = new DefaultApi(new Configuration({ basePath: '/api' }));
export const getPerson = (): Promise<PersonDTO> => {
  // return getSoknader();
  return api.personTestGet();
};
