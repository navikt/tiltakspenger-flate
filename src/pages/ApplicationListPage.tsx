import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import MyTable from '../components/Table';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import Periode from '../components/Periode';
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
  periode: JSX.Element;
};

const columns: {
  key: keyof SoknadWithStatus;
  name: string;
  title: string;
  dataIndex: string;
  sorter?: (a: SoknadWithStatus, b: SoknadWithStatus) => number;
  sortDirections?: ('descend' | 'ascend')[];
}[] = [
  {
    key: 'opprettet',
    dataIndex: 'opprettet',
    name: 'Opprettet',
    title: 'Opprettet',
    sorter: (a, b): number =>
      new Date(a?.opprettet || '').getTime() -
      new Date(b?.opprettet || '').getTime(),
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'type',
    dataIndex: 'type',
    name: 'Behandlingstype',
    title: 'Behandlingstype',
  },
  { key: 'fnr', dataIndex: 'fnr', name: 'Fødselsnr', title: 'Fødselsnr' },
  { key: 'navn', dataIndex: 'navn', name: 'Søker', title: 'Søker' },
  {
    key: 'typeTiltak',
    dataIndex: 'typeTiltak',
    name: 'Tiltakstype',
    title: 'Tiltakstype',
  },
  {
    key: 'tiltaksNavn',
    dataIndex: 'tiltaksNavn',
    name: 'Tiltaksplass',
    title: 'Tiltaksplass',
  },
  { key: 'periode', dataIndex: 'periode', name: 'Periode', title: 'Periode' },
  {
    key: 'statusSoknad',
    dataIndex: 'statusSoknad',
    name: 'Status',
    title: 'Status',
  },
];

const processedFilter = (soknad: SoknadWithStatus) =>
  soknad.statusSoknad !== 'Ikke behandlet';
const unProcessedFilter = (soknad: SoknadWithStatus) =>
  soknad.statusSoknad === 'Ikke behandlet';
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
    periode: <Periode fom={soknad.tiltakFom} tom={soknad.tiltakTom} />,
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
            {/*<MyTable columns={columns} data={applications} />*/}
            <Table
              className="mt-8"
              columns={columns}
              dataSource={applications.map((data, index) => ({
                ...data,
                key: index,
              }))}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationListPage;
