import Tag from './Tag';
import React, { FC } from 'react';

export enum Behandling {
  ForsteGang,
  Forlengelse,
  ForlengelseIT,
  Revurdering,
  Klage,
  Stikkprove,
  QA,
}

const shortNames = {
  [Behandling.ForsteGang]: {
    value: 'F',
    className: 'border-purple-200 bg-purple-100',
  },
  [Behandling.Forlengelse]: {
    value: 'FL',
    className: 'border-sky-400 bg-sky-200',
  },
  [Behandling.ForlengelseIT]: {
    value: 'FI',
    className: 'border-stone-400 bg-stone-200',
  },
  [Behandling.Revurdering]: {
    value: 'R',
    className: 'border-yellow-400 bg-yellow-200',
  },
  [Behandling.Klage]: {
    value: 'K',
    className: 'border-red-400 bg-red-200',
  },
  [Behandling.Stikkprove]: {
    value: 'S',
    className: 'border-red-400 bg-red-200',
  },
  [Behandling.QA]: {
    value: 'QA',
    className: 'border-yellow-400 bg-yellow-200',
  },
};

const BehandlingsTag: FC<{ behandling: Behandling }> = ({ behandling }) => {
  return (
    <div className="flex">
      <Tag
        className={`w-20 flex justify-center ${shortNames[behandling].className}`}
      >
        {shortNames[behandling].value}
      </Tag>
    </div>
  );
};

export default BehandlingsTag;
