import { Accordion, Table, Tag } from '@navikt/ds-react';
import { Error, SuccessStroke, WarningColored } from '@navikt/ds-icons';
import React from 'react';
import {
  Periode,
  Vilkarsvurdering,
  VilkarsvurderingUtfallEnum,
} from 'generated';
import { format } from '../../../util/dateFormatting';

const columnNames = ['Vurdering', 'Vilkår', 'Periode', 'Kilde'];

enum Utfall {
  OPPFYLT,
  IKKE_OPPFYLT,
}

export interface Vurdering {
  utfall: Utfall;
  vilkår: string;
  periode: string;
  kilde: string;
}

export interface Props {
  title: string;
  vurderinger: Vilkarsvurdering[];
}

const VurderingsKategori = ({ title, vurderinger }: Props) => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>
          <div className={'flex items-center'}>
            <WarningColored className="text-green-400" />
            <div className="ml-4">{title}</div>
          </div>
        </Accordion.Header>
        <Accordion.Content>
          <Table zebraStripes size="small">
            <Table.Header>
              <Table.Row>
                {columnNames.map((name, index) => (
                  <Table.ColumnHeader key={index}>{name}</Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {vurderinger.map((vurdering, index) => (
                <VurderingsRow vurdering={vurdering} key={index} />
              ))}
            </Table.Body>
          </Table>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

const VurderingsRow = ({ vurdering }: { vurdering: Vilkarsvurdering }) => {
  return (
    <Table.Row>
      <Table.DataCell>
        <div className="flex items-center">
          {vurderingsIcon[vurdering.utfall]}
          <span className="ml-2">{vurdering.utfall}</span>
        </div>
      </Table.DataCell>
      <Table.DataCell>{vurdering.vilkår}</Table.DataCell>
      <Table.DataCell>{periodeString(vurdering.periode)}</Table.DataCell>
      <Table.DataCell>
        <Tag variant="info" size="small">
          A
        </Tag>
        <span className="ml-2">{vurdering.kilde}</span>
      </Table.DataCell>
    </Table.Row>
  );
};

const vurderingsIcon = {
  [VilkarsvurderingUtfallEnum.Oppfylt]: (
    <SuccessStroke className="text-green-400" />
  ),
  [VilkarsvurderingUtfallEnum.IkkeOppfylt]: <Error className="text-red-400" />,
  [VilkarsvurderingUtfallEnum.Uavklart]: <WarningColored />,
};

const periodeString = (periode: Periode | undefined) => {
  if (!periode?.fra || !periode?.til) return '-';
  return `${format(periode.fra, 'dd.MM.y')} - ${format(
    periode.til,
    'dd.MM.y'
  )}`;
};

export default VurderingsKategori;
