import React, { useState, useEffect, ReactElement } from 'react';
import { Table } from 'antd';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import Periode from '../components/Periode';
import { useRequest } from '../api/common';
import { useNavigate } from 'react-router-dom';
import { soknadPath } from '../routes';
import { alertsState } from '../state/alerts';
import { useRecoilState } from 'recoil';
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
  render?: (
    value: unknown,
    soknad: SoknadWithStatus,
    index: number
  ) => ReactElement | string;
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
  {
    key: 'fnr',
    dataIndex: 'fnr',
    name: 'Fødselsnr',
    title: 'Fødselsnr',

    sorter: (a, b): number =>
      a.fnr.toLocaleLowerCase().localeCompare(b.fnr.toLocaleLowerCase()),
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'fornavn',
    dataIndex: 'navn',
    name: 'Søker',
    title: 'Søker',
    render: (_, data, index) => {
      return `${data.fornavn} ${data.etternavn}`;
    },
    sorter: (a, b): number =>
      a.etternavn
        .toLocaleLowerCase()
        .localeCompare(b.etternavn.toLocaleLowerCase()),
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'typeTiltak',
    dataIndex: 'typeTiltak',
    name: 'Tiltakstype',
    title: 'Tiltakstype',
    sorter: (a, b): number =>
      a.typeTiltak
        ?.toLocaleLowerCase()
        .localeCompare(b.typeTiltak?.toLocaleLowerCase() || '') || 1,
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'tiltaksNavn',
    dataIndex: 'tiltaksNavn',
    name: 'Tiltaksplass',
    title: 'Tiltaksplass',
    sorter: (a, b): number =>
      b.tiltaksNavn
        ?.toLocaleLowerCase()
        .localeCompare(a.tiltaksNavn?.toLocaleLowerCase() || '') || 1,
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'periode',
    dataIndex: 'periode',
    name: 'Periode',
    title: 'Periode',
    render: (_, data) => {
      return `${data.brukerStartDato || '- '}-${data.brukerSluttDato || ' -'}`;
    },
  },
  {
    key: 'statusSoknad',
    dataIndex: 'statusSoknad',
    name: 'Status',
    title: 'Status',
    sorter: (a, b): number =>
      a.statusSoknad
        .toLocaleLowerCase()
        .localeCompare(b.statusSoknad.toLocaleLowerCase()),
    sortDirections: ['descend', 'ascend'],
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
    soknader?.data || ([] as Soknad[])
  ).map((soknad) => ({
    ...soknad,
    type: <BehandlingsTag behandling={Behandling.ForsteGang} />,
    periode: <Periode fom={soknad.tiltakFom} tom={soknad.tiltakTom} />,
  }));

  const applications = (enrichedSoknader || []).filter(
    soknadStates[currentTab]
  );
  const alert = useRecoilState(alertsState);
  useEffect(() => {
    runGetSoknader();
  }, []);

  const navigate = useNavigate();
  const handleClick = (soknadId: string) => {
    console.log(soknadId);
    navigate(soknadPath(soknadId));
  };

  return (
    <div>
      <div className="flex flex-col items-start p-40">
        {!!soknader?.data?.length && (
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
            <Table
              className="mt-6"
              columns={columns}
              dataSource={applications.map((data, index) => ({
                ...data,
                key: index,
              }))}
              pagination={{ pageSize: 10 }}
              onRow={(soknad) => {
                return {
                  onClick: () => {
                    handleClick(soknad.soknadId.toString());
                  },
                };
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationListPage;
