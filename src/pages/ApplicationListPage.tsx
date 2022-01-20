import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import { useRequest } from '../api/common';

import { getSoknader, Soknad, SoknadStatus } from '../api/soknad';

/*
const tags = [
  Behandling.ForsteGang,
  Behandling.Forlengelse,
  Behandling.ForlengelseIT,
  Behandling.Revurdering,
  Behandling.Klage,
  Behandling.Stikkprove,
  Behandling.QA,
];*/

type SoknadWithStatus = Soknad & {
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

const processedFilter = (soknad: SoknadWithStatus) =>
  soknad.statusSoknad !== 'Ikke behandlet';
const unProcessedFilter = (soknad: SoknadWithStatus) =>
  soknad.statusSoknad === 'Behandlet';
const soknadStates = {
  'Ikke behandlet': unProcessedFilter,
  Behandlet: processedFilter,
  Avslag: () => true,
};

const ApplicationListPage = () => {
  const [currentTab, setTab] = useState<SoknadStatus>('Ikke behandlet');

  const {
    run: runGetSoknader,
    error,
    result: soknader,
  } = useRequest(() => getSoknader(currentTab));
  const enrichedSoknader: SoknadWithStatus[] = (
    soknader || ([] as Soknad[])
  ).map((soknad) => ({
    ...soknad,
    type: <BehandlingsTag behandling={Behandling.ForsteGang} />,
    strek: '-',
  }));

  const applications = (enrichedSoknader || []).filter(
    soknadStates[currentTab]
  );
  useEffect(() => {
    runGetSoknader();
  }, []);

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
              <Tabs
                defaultValue={'Ikke behandlet' as SoknadStatus}
                onTabChange={(status: SoknadStatus) => setTab(status)}
              >
                <Tab value={'Ikke behandlet'}>Ikke behandlet</Tab>
                <Tab value={'Behandlet'}>Behandlet</Tab>
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
