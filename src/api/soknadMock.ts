import { backendUrl } from './common';

export interface SoknadMock {
  dokumentInfoId: string;
  tittel: string;
  personIdent: string;
  fornavn: string;
  etternavn: string;
  boadresse: string;
  postnummer: string;
  kontonummer: string;
  tiltaksType: string;
  KVP: boolean;
  institusjonsopphold: boolean;
  startdato: string;
  sluttdato: string;
  tiltaksarrangorNavn: string;
  tiltaksadresse: string;
  tiltakspostnummer: string;
  tiltaksdagerPerUke: number;
  pensjonEtterlønn: boolean;
  barn: [];
  tilleggsopplysninger: string;
}

export const getSoknader = (): Promise<SoknadMock[]> => {
  return fetch(`${backendUrl}/api/mocksoknad`).then((res) => res.json());
};
