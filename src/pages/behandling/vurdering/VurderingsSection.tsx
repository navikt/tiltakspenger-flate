import React from 'react';
import { Accordion, Table, Tag, Alert } from '@navikt/ds-react';
import VurderingsKategori from './VurderingsKategori';

const statligeVurderinger = [{}];
const kommunaleVurderinger = [];

const VurderingsSection = () => {
  return (
    <div className="border-x border-gray-200 flex flex-col flex-1">
      <div className="self-start py-4 px-4 border-b border-gray-200 flex flex-col self-stretch items-start">
        <h1 className="pl-4 pb-0 mb-0 text-left text-2xl">Søknader</h1>
        <h2 className="pl-4 text-lg">Gruppe AMO - Jobblearn</h2>
      </div>
      <Alert
        style={{
          borderRadius: 0,
          border: 0,
        }}
        variant="warning"
        className="mb-4"
      >
        Vilkår for tiltakspenger må vurderes for perioden
      </Alert>
      <div className="px-8">
        <VurderingsKategori title={'Statlige ytelser'} />
        <VurderingsKategori title={'Kommunale ytelser'} />
        <VurderingsKategori title={'Private ordninger'} />
      </div>
    </div>
  );
};

export default VurderingsSection;
