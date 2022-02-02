import React, { useState } from 'react';
import { Tab, Tabs } from '../../components/Tabs';
import RequirementChecks from './RequirementChecks';
import BarneTillegg from './BarneTillegg';

const Content = () => {
  const [tab, setTab] = useState('vilkår');

  return (
    <div className="flex flex-col items-strech ">
      <div className="border-b border-gray-200 flex flex-1">
        <Tabs onTabChange={setTab} className="mx-4" defaultValue={'vilkår'}>
          <Tab value={'vilkår'}>Inngangsvilkår</Tab>
          <Tab value={'barnetillegg'}>Barnetillegg</Tab>
        </Tabs>
      </div>
      <div className="self-stretch flex mb-16 px-8 pt-4">
        {tab == 'vilkår' && <RequirementChecks soknad={{} as any} />}
        {tab == 'barnetillegg' && <BarneTillegg />}
      </div>
    </div>
  );
};

export default Content;
