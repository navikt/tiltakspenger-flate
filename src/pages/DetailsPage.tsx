import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Timeline from './details/Timeline';
import { Tab, Tabs } from '../components/Tabs';
import CentreContent from './details/CentreContent';
import { getSoknad, Soknad } from '../api/soknad';

const DetailsPage = () => {
  const { id: soknadId } = useParams();

  const [soknad, setSoknad] = useState(undefined);

  useEffect(() => {
    if (!soknadId) return;
    getSoknad(soknadId).then((soknad) => setSoknad(soknad));
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <Timeline />
      <div className="flex flex-col items-start p-40">
        <div className="self-stretch flex border-b-2 border-gray-200 mb-16">
          <Tabs>
            <Tab>Utbetaling</Tab>
            <Tab>Inngangsvilkår</Tab>
          </Tabs>
        </div>
        {soknad ? <CentreContent soknad={soknad} /> : null}
      </div>
    </div>
  );
};

export default DetailsPage;
