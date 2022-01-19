import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import { useRequest } from '../api/common';

import { getSoknader, SoknadList } from '../api/soknadList';
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

type SoknadWithStatus = SoknadList & {
  type: JSX.Element;
  strek: '-';
};

const columns: {
  key: keyof SoknadWithStatus;
  name: string;
}[] = [
  { key: 'opprettet', name: 'Opprettet' },
  { key: 'type', name: 'Behandlingstype' },
  { key: 'fnr', name: 'Fødselsnr' },
  { key: 'navn', name: 'Søker' },
  { key: 'typeTiltak', name: 'Tiltakstype' },
  { key: 'tiltaksNavn', name: 'Tiltaksplass' },
  { key: 'tiltakFom', name: 'Periode' },
  { key: 'strek', name: '' },
  { key: 'tiltakTom', name: '' },
  { key: 'statusSoknad', name: 'Status' },
];

const ApplicationListPage = () => {
  const {
    run: runGetSoknader,
    error,
    result: soknader,
  } = useRequest(getSoknader);
  const enrichedSoknader: SoknadWithStatus[] = (
    soknader || ([] as SoknadList[])
  ).map((soknad, index) => ({
    ...soknad,
    type: <BehandlingsTag behandling={Behandling.ForsteGang} />,
    strek: '-',
  }));

  const processedFilter = (soknad: SoknadWithStatus) =>
    soknad.statusSoknad !== 'Ikke behandlet';
  const unProcessedFilter = (soknad: SoknadWithStatus) =>
    soknad.statusSoknad === 'Behandlet';

  const [filterIndex, setFilterIndex] = useState<number>(0);
  const filters: Record<number, (soknad: SoknadWithStatus) => boolean> = {
    0: processedFilter,
    1: unProcessedFilter,
  };
  const applications = (enrichedSoknader || []).filter(filters[filterIndex]);

  useEffect(() => {
    runGetSoknader();
  }, []);

  const { 1: setAlerts } = useRecoilState(alertsState);

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
            <Table columns={columns} data={applications} />
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationListPage;
