import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Timelines, { Periode } from '../../components/timeline/Timelines';
import TiltakSection from '../person/TiltakSection';
import VurderingsSection from './vurdering/VurderingsSection';
import ActionPanel from './ActionPanel';
import { addMonths } from 'date-fns';
import SummarySection from './SummarySection';
import { getPerson } from '../../api/soknad';
import { PersonDTO } from '../../../generated';

const BehandlingsPage = () => {
  const testPerioder: Periode[] = [
    {
      from: new Date(),
      to: addMonths(new Date(), 2),
      name: 'Tiltak',
      soknadId: '12312',
      dotted: false,
    },
  ];

  const [person, setPerson] = useState<PersonDTO>();

  useEffect(() => {
    getPerson().then((person) => setPerson(person));
  }, []);

  person?.behandlinger?.map((behandling) => behandling.vurderinger);

  return (
    <div>
      <Breadcrumbs />
      <Timelines perioder={testPerioder} />
      <div className={'grid grid-cols grid-flow-col'}>
        <div className="col-span-2">
          <SummarySection />
        </div>
        <div className="col-span-4">
          <VurderingsSection />
        </div>
        <div className="col-span-2">
          <ActionPanel />
        </div>
      </div>
    </div>
  );
};

export default BehandlingsPage;
