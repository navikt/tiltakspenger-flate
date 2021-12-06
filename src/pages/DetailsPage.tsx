import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Timelines from '../components/timeline/Timelines';
import BehandlingsTag, { Behandling } from '../components/BehandlingsTag';
import { getSoknad, Soknad } from '../api/soknad';

export const SoknadContext = React.createContext({
  soknad: undefined as undefined | Soknad,
});

const DetailsPage = () => {
  const { id: soknadId } = useParams();

  const [soknad, setSoknad] = useState<Soknad | undefined>(undefined);

  useEffect(() => {
    if (!soknadId) return;
    getSoknad(soknadId).then((soknad) => setSoknad(soknad));
  }, []);

  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      <Timelines />
      <div className="grid grid-cols-12 flex-1">
        <div className="col-span-2 border-r border-sky-400 p-8">
          <div className="border-b border-gray-200 flex justify-between py-4">
            <span className="flex">
              <BehandlingsTag behandling={Behandling.Forlengelse} />
              <span className="ml-2">Forlengelse</span>
            </span>
          </div>
          <div className="flex flex-col items-start mt-4">
            <h1 className="text-base font-bold text-left">Tiltak</h1>
            <div>AMO kurs 100%</div>
            <div>Klaras kaker</div>
            <div>11.12.93-12.11.93</div>
            <div>Status: gjennomføres</div>
          </div>
          <div className="flex flex-col items-start mt-4">
            <h1 className="text-base font-bold text-left">Barn</h1>
            <div>AMO kurs 100%</div>
            <div>Klaras kaker</div>
            <div>11.12.93-12.11.93</div>
            <div>Status: gjennomføres</div>
          </div>
        </div>
        <div className="col-span-8 col-start-3">
          <SoknadContext.Provider value={{ soknad }}>
            <Outlet />
          </SoknadContext.Provider>
        </div>
        <div className="col-span-2 border-l border-gray-200 flex flex-col p-8">
          <span className="border-b border-gray-200">Historikk?</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
