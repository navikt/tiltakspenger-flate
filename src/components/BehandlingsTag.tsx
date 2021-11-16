import Tag from './Tag';
import React, { FC } from 'react';

export enum Behandling {
  FørsteGang,
  Forlengelse,
  ForlengelseIT,
  Revurdering,
  Klage,
  Stikkprøve,
  QA,
}

const shortNames = {
  [Behandling.FørsteGang]: 'F',
  [Behandling.Forlengelse]: 'FL',
  [Behandling.ForlengelseIT]: 'FI',
  [Behandling.Revurdering]: 'R',
  [Behandling.Klage]: 'K',
  [Behandling.Stikkprøve]: 'S',
  [Behandling.QA]: 'QA',
};

const BehandlingsTag: FC<{ behandling: Behandling }> = ({ behandling }) => {
  return (
    <div className="flex">
      <Tag>{shortNames[behandling]}</Tag>
    </div>
  );
};

export default BehandlingsTag;
