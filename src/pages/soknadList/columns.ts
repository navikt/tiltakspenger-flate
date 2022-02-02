import { ReactElement } from 'react';
import { SoknadWithStatus } from './ApplicationListPage';

export const columns: {
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
