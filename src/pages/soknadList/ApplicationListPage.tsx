import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Tab, Tabs } from '../../components/Tabs';
import BehandlingsTag, { Behandling } from '../../components/BehandlingsTag';
import Periode from '../../components/Periode';
import { useRequest } from '../../api/common';
import { useNavigate } from 'react-router-dom';
import { personPath } from '../../routes';
import { getSoknader, Soknad, SoknadStatus } from '../../api/soknad';
import { columns } from './columns';

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

export type SoknadWithStatus = Soknad & {
  type: JSX.Element;
  periode: JSX.Element;
};

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

  const { run: runGetSoknader, result: soknader } = useRequest(() =>
    getSoknader(currentTab)
  );
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

  useEffect(() => {
    runGetSoknader();
  }, []);

  const navigate = useNavigate();
  const handleClick = ({
    soknadId,
    fnr,
  }: {
    soknadId: string;
    fnr: string;
  }) => {
    navigate(personPath({ soknadId, fnr }));
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
                    handleClick({
                      fnr: soknad.ident.toString(),
                      soknadId: soknad.id.toString(),
                    });
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