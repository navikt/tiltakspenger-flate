import { backendUrl, HTTP } from './common';

interface Faktum {
  key: string;
  parrentFaktum: null;
  properties: Record<string, string | boolean | number>;
  soknadId: number;
  type: 'BRUKERREGISTRERT' | 'SYSTEMREGISTRERT';
  value: null | string | number | boolean;
}

export interface Soknad {
  aktoerId: string;
  behandlingskjedeId: null | string;
  brukerBehandlingId: string;
  delstegStatus: string;
  erEttersending: boolean;
  fakta: Faktum[];
  fortsettSoknadUrl: string;
  journalforendeEnhet: null | string;
  opprettetDato: string;
  sistLagret: string;
  skjemaNummer: string;
  soknadId: number;
  soknadPrefix: string;
  soknadUrl: string;
  status: string;
  uuid: string;
  vedlegg: any[];
  versjon: number | null;
}

export const getPersonalia = (
  soknad: Soknad
): { fornavn: string; etternavn: string } =>
  soknad.fakta.find((fakta) => fakta.key === 'personalia')!!.properties!!;

export const getValgtTiltak = (soknad: Soknad): string =>
  soknad.fakta.find((fakta) => fakta.key === 'tiltaksliste.valgtTiltak')!!
    .value as string;

interface ArenaTiltak {
  arenaId: string;
  arrangoer: string;
  erIEndreStatus: 'false' | 'true';
  harSluttdatoFraArena: 'false' | 'true';
  navn: string;
  opprinneligsluttdato: null | string;
  opprinneligstartdato: string;
  sluttdato: string;
  startdato: string;
}
export const getTiltakFraArena = (soknad: Soknad): ArenaTiltak | undefined =>
  soknad?.fakta.find((fakta) => fakta.key === 'tiltaksliste.tiltakFraArena')
    ?.properties as unknown as ArenaTiltak;

export const getSoknad = (soknadId: string): Promise<Soknad> => {
  return HTTP.GET(`${backendUrl}/api/mocksoknad/1`);
};

export const getSoknader = (): Promise<Soknad[]> => {
  return HTTP.GET(`${backendUrl}/api/mocksoknad`);
};

export const getSoknaderRaw = (
  journalPostId: string,
  dokumentInfoId: string
): Promise<Soknad[]> => {
  return HTTP.GET(
    `${backendUrl}/api/soknad/${journalPostId}?dokumentInfoId=${dokumentInfoId}`
  );
};
