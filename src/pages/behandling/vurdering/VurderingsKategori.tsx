import { Accordion, Table, Tag } from '@navikt/ds-react';
import {
  Error,
  Success,
  SuccessStroke,
  WarningColored,
} from '@navikt/ds-icons';
import React from 'react';

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
  vurderinger: Vurdering[];
}

const VurderingsKategori = ({ title }: { title: string }) => {
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
              <Table.Row>
                <Table.DataCell>
                  <div className="flex items-center">
                    <SuccessStroke className="text-green-400" />
                    <span className="ml-2">Oppfylt</span>
                  </div>
                </Table.DataCell>
                <Table.DataCell>Dagpenger</Table.DataCell>
                <Table.DataCell>-</Table.DataCell>
                <Table.DataCell>
                  <Tag variant="info" size="small">
                    A
                  </Tag>
                  <span className="ml-2">Arena</span>
                </Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>
                  <div className="flex items-center">
                    <SuccessStroke className="text-green-400" />
                    <span className="ml-2">Oppfylt</span>
                  </div>
                </Table.DataCell>{' '}
                <Table.DataCell>Dagpenger</Table.DataCell>
                <Table.DataCell>-</Table.DataCell>
                <Table.DataCell>
                  <Tag variant="info" size="small">
                    A
                  </Tag>
                  <span className="ml-2">Arena</span>
                </Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>
                  <div className="flex items-center">
                    <Error className="text-red-400" />
                    <span className="ml-2">Oppfylt</span>
                  </div>
                </Table.DataCell>{' '}
                <Table.DataCell>Dagpenger</Table.DataCell>
                <Table.DataCell>-</Table.DataCell>
                <Table.DataCell>
                  <Tag variant="info" size="small">
                    A
                  </Tag>
                  <span className="ml-2">Arena</span>
                </Table.DataCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default VurderingsKategori;
