import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import { getSoknader, SoknadMock } from '../api/soknadMock';

const tags = [
  Behandling.ForsteGang,
  Behandling.Forlengelse,
  Behandling.ForlengelseIT,
  Behandling.Revurdering,
  Behandling.Klage,
  Behandling.Stikkprove,
  Behandling.QA,
];

const columns: {
  key: keyof SoknadMock | 'type' | 'status';
  name: string;
}[] = [
  { key: 'startdato', name: 'Opprettet' },
  { key: 'type', name: 'Type' },
  { key: 'tiltaksType', name: 'Behandlingstype' },
  { key: 'fornavn', name: 'Søker' },
  { key: 'tiltaksarrangorNavn', name: 'Tiltaksplass' },
  { key: 'startdato', name: 'Periode' },
  { key: 'status', name: 'Status' },
];

const ApplicationListPage = () => {
  const [soknader, setSoknader] = useState<
    (SoknadMock & { status: string; type: JSX.Element })[] | undefined
  >(undefined);

  useEffect(() => {
    getSoknader().then((soknader) => {
      const enrichedSoknader = soknader.map((soknad, index) => ({
        ...soknad,
        status: 'Under behandling',
        type: <BehandlingsTag behandling={tags[index]} />,
      }));
      setSoknader(enrichedSoknader);
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-start p-40">
        <div className="self-stretch flex border-b-2 border-gray-200 mb-16">
          <Tabs>
            <Tab>Ikke behandlet</Tab>
            <Tab>Behandlet</Tab>
          </Tabs>
        </div>
        {soknader === undefined ? (
          <div className="border border-sky-400 rounded-md p-2 animate-spin">
            Laster data
          </div>
        ) : (
          <Table columns={columns} data={soknader || []} />
        )}
      </div>
    </div>
  );
};

export default ApplicationListPage;
