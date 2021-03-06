import React, { useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Timelines, {
  NavigatablePeriode,
} from '../../components/timeline/Timelines';
import VurderingsSection from './vurdering/VurderingsSection';
import ActionPanel from './ActionPanel';
import { addMonths } from 'date-fns';
import SummarySection from './SummarySection';
import { getPerson } from '../../api/soknad';
import { useSetRecoilState } from 'recoil';
import { personState } from '../../state/person';
import { useRequest } from '../../api/common';
import ErrorPage from '../ErrorPage';
import logger from '../../server/logger';

const BehandlingsPage = () => {
  const testPerioder: NavigatablePeriode[] = [
    {
      from: new Date(),
      to: addMonths(new Date(), 2),
      name: 'Tiltak',
      soknadId: '12312',
      dotted: false,
      onClick: () => {
        logger.info('Click');
      },
    },
  ];

  const {
    run: runGetPerson,
    isLoading,
    error,
    result: person,
  } = useRequest(() => getPerson());

  const setPerson = useSetRecoilState(personState);
  useEffect(() => {
    runGetPerson();
  }, []);
  useEffect(() => {
    if (!person) return;
    setPerson(person);
  }, [person, setPerson]);

  if (error) {
    console.error(error);
    return <ErrorPage message={'Could not fetch person'} errorCode={'404'} />;
  }

  return (
    <div>
      <Breadcrumbs />
      <Timelines selectedSoknadId={'12312'} perioder={testPerioder} />
      <div className={'grid grid-cols-4'}>
        <div className="col-span-1">
          <SummarySection isLoading={isLoading} />
        </div>
        <div className="col-span-2">
          <VurderingsSection isLoading={isLoading} />
        </div>
        <div className="col-span-1">
          <ActionPanel isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default BehandlingsPage;
