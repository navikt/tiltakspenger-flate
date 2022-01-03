import React, { useEffect } from 'react';
import Table from '../components/Table';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import { useRequest } from '../api/common';
import {
  getPersonalia,
  getSoknader,
  getTiltakFraArena,
  getValgtTiltak,
  Soknad,
} from '../api/soknad';
import { alertsState } from '../state/alerts';
import { useRecoilState } from 'recoil';

const tags = [
  Behandling.ForsteGang,
  Behandling.Forlengelse,
  Behandling.ForlengelseIT,
  Behandling.Revurdering,
  Behandling.Klage,
  Behandling.Stikkprove,
  Behandling.QA,
];

type SoknadWithStatus = Soknad & {
  status: string;
  type: JSX.Element;
  fornavn: string;
  tiltaksarrangorNavn: string;
  tiltaksType: string;
  startdato: string | undefined;
};

const columns: {
  key: keyof SoknadWithStatus;
  name: string;
}[] = [
  { key: 'opprettetDato', name: 'Opprettet' },
  { key: 'type', name: 'Type' },
  { key: 'tiltaksType', name: 'Behandlingstype' },
  { key: 'fornavn', name: 'Søker' },
  { key: 'tiltaksarrangorNavn', name: 'Tiltaksplass' },
  { key: 'startdato', name: 'Periode' },
  { key: 'status', name: 'Status' },
];

const ApplicationListPage = () => {
  const {
    run: runGetSoknader,
    error,
    result: soknader,
  } = useRequest(getSoknader);

  useEffect(() => {
    runGetSoknader();
  }, []);

  const enrichedSoknader: SoknadWithStatus[] = (
    soknader || ([] as Soknad[])
  ).map((soknad, index) => ({
    ...soknad,
    fornavn: getPersonalia(soknad).fornavn,
    tiltaksType: '?',
    tiltaksarrangorNavn:
      getTiltakFraArena(soknad)?.navn || getValgtTiltak(soknad),
    startdato: getTiltakFraArena(soknad)?.startdato,
    status: 'Under behandling',
    type: <BehandlingsTag behandling={tags[index]} />,
  }));

  const { 1: setAlerts } = useRecoilState(alertsState);
  const getProcessedApplications = () => {
    setAlerts([
      {
        key: 'testKey',
        type: 'error',
        message: 'Something failed',
      },
    ]);
    return [];
  };
  const getUnprocessedApplications = () => {
    setAlerts([]);
    return [];
  };

  return (
    <div>
      <div className="flex flex-col items-start p-40">
        {error && (
          <div className="border border-red-400 p-4 rounded-md bg-red-200">
            {(error as string).toString()}
          </div>
        )}
        {!!soknader?.length && (
          <>
            <div className="self-stretch flex border-b-2 border-gray-200 mb-16">
              <Tabs>
                <Tab onClick={getUnprocessedApplications}>Ikke behandlet</Tab>
                <Tab onClick={getProcessedApplications}>Behandlet</Tab>
              </Tabs>
            </div>
            <Table columns={columns} data={enrichedSoknader || []} />
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationListPage;
