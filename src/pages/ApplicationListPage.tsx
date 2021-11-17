import React from 'react';
import Table from '../components/Table';
import { Tab, Tabs } from '../components/Tabs';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import Breadcrumbs from '../components/Breadcrumbs';
import Layout from "../components/Layout";

const dataElement = {
  created: '02.02.2020',
  treatmentType: <BehandlingsTag behandling={Behandling.Forlengelse} />,
  applicant: 'Sigurd Grøneng',
  tiltaksplass: 'Påmeldt',
  period: '01.12.2021-15.06.2021',
  status: '',
};

const data = [
  Behandling.FørsteGang,
  Behandling.Forlengelse,
  Behandling.ForlengelseIT,
  Behandling.Revurdering,
  Behandling.Klage,
  Behandling.Stikkprøve,
  Behandling.QA,
].map((behandling) => ({
  ...dataElement,
  treatmentType: <BehandlingsTag behandling={behandling} />,
}));

const columns: any = [
  { key: 'created', name: 'Opprettet' },
  { key: 'treatmentType', name: 'Behandlingstype' },
  { key: 'applicant', name: 'Søker' },
  { key: 'tiltaksplass', name: 'Tiltaksplass' },
  { key: 'period', name: 'Periode' },
  { key: 'status', name: 'Status' },
];

const ApplicationListPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <Layout sidebar={<div />} content={<div className="flex flex-col items-start p-40">
        <div className="self-stretch flex border-b-2 border-gray-200 mb-16">
          <Tabs>
            <Tab>Ikke behandlet</Tab>
            <Tab>Behandlet</Tab>
          </Tabs>
        </div>
        <Table columns={columns} data={data} />
      </div>}></Layout>

    </div>
  );
};

export default ApplicationListPage;
