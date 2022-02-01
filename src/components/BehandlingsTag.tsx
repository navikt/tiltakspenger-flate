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
    text: 'Førstegb.',
  },
  [Behandling.Forlengelse]: {
    value: 'FL',
    className: 'border-sky-400 bg-sky-200',
    text: 'Forlengelse',
  },
  [Behandling.ForlengelseIT]: {
    value: 'FI',
    className: 'border-stone-400 bg-stone-200',
    text: 'Forlengelse IT',
  },
  [Behandling.Revurdering]: {
    value: 'R',
    className: 'border-yellow-400 bg-yellow-200',
    text: 'Revurdering',
  },
  [Behandling.Klage]: {
    value: 'K',
    className: 'border-red-400 bg-red-200',
    text: 'Klage',
  },
  [Behandling.Stikkprove]: {
    value: 'S',
    className: 'border-red-400 bg-red-200',
    text: 'Stikkprøve',
  },
  [Behandling.QA]: {
    value: 'QA',
    className: 'border-yellow-400 bg-yellow-200',
    text: 'QA',
  },
};

const BehandlingsTag: FC<{ behandling: Behandling }> = ({ behandling }) => {
  return (
    <div className="flex place-content-evenly">
      <Tag
        className={`w-20 flex justify-center mr-2 ${shortNames[behandling].className}`}
      >
        {shortNames[behandling].value}
      </Tag>
      {shortNames[behandling].text}
    </div>
  );
};

export default BehandlingsTag;
