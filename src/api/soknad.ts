import { backendUrl } from './common';

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

export const getSoknad = (soknadId: string): Promise<Soknad> => {
  return fetch(`${backendUrl}/api/mocksoknad/${soknadId}`).then((res) =>
    res.json()
  );
};
