import { ReactElement } from 'react';
import { SoknadWithStatus } from './ApplicationListPage';
import { format } from '../../util/dateFormatting';

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
    key: 'ident',
    dataIndex: 'ident',
    name: 'Fødselsnr',
    title: 'Fødselsnr',

    sorter: (a, b): number =>
      a.ident.toLocaleLowerCase().localeCompare(b.ident.toLocaleLowerCase()),
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'fornavn',
    dataIndex: 'navn',
    name: 'Søker',
    title: 'Søker',
    render: (_, data) => {
      return `${data.etternavn} ${data.fornavn}`;
    },
    sorter: (a, b): number =>
      a.etternavn
        .toLocaleLowerCase()
        .localeCompare(b.etternavn.toLocaleLowerCase()),
    sortDirections: ['descend', 'ascend'],
  },
  /*
  {
    key: 'typeTiltak',
    dataIndex: 'typeTiltak',
    name: 'Tiltakstype',
    title: 'Tiltakstype',
    sorter: (a, b): number =>
      a.tiltaksType
        ?.toLocaleLowerCase()
        .localeCompare(b.tiltaksType?.toLocaleLowerCase() || '') || 1,
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
  },*/
  {
    key: 'periode',
    dataIndex: 'periode',
    name: 'Periode',
    title: 'Periode',
    render: (_, data) => {
      return `${format(data.brukerRegistrertStartDato, 'dd.MM.yy')}-${format(
        data.brukerRegistrertSluttDato,
        'dd.MM.yy'
      )}`;
    },
  },
  /*
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
  },*/
];
