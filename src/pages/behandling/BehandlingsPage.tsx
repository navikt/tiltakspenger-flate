import React, { useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Timelines, { Periode } from '../../components/timeline/Timelines';
import VurderingsSection from './vurdering/VurderingsSection';
import ActionPanel from './ActionPanel';
import { addMonths } from 'date-fns';
import SummarySection from './SummarySection';
import { getPerson } from '../../api/soknad';
import { useSetRecoilState } from 'recoil';
import { personState } from '../../state/person';

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

  const setPerson = useSetRecoilState(personState);
  useEffect(() => {
    getPerson().then((person) => setPerson(person));
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <Timelines perioder={testPerioder} />
      <div className={'grid grid-cols-4'}>
        <div className="col-span-1">
          <SummarySection />
        </div>
        <div className="col-span-2">
          <VurderingsSection />
        </div>
        <div className="col-span-1">
          <ActionPanel />
        </div>
      </div>
    </div>
  );
};

export default BehandlingsPage;
