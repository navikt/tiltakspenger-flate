import React from 'react';
import Table from '../components/Table';

const dataElement = {
  created: '02.02.2020',
  treatmentType: 'F',
  applicant: 'Sigurd Grøneng',
  tiltaksplass: 'Påmeldt',
  period: '01.12.2021-15.06.2021',
  status: '',
};

const data = [dataElement, dataElement, dataElement, dataElement, dataElement];

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
      <h1>Liste over søknader</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ApplicationListPage;
