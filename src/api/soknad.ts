import { backendUrl } from './common';

export interface Soknad {
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

export const getSoknader = (): Promise<Soknad[]> => {
  return fetch(`${backendUrl}/api/mocksoknad`).then((res) => res.json());
};

export const getSoknad = (soknadId: string) => {
  return fetch(`${backendUrl}/api/mocksoknad/${soknadId}`).then((res) =>
    res.json()
  );
};
