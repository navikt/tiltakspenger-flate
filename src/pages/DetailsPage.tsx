import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Timelines from '../components/timeline/Timelines';
import { Soknad } from '../api/soknad';
import LeftSidebar from './details/LeftSidebar';

export const SoknadContext = React.createContext({
  soknad: undefined as undefined | Soknad,
});

const DetailsPage = () => {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      <Timelines />
      <div className="grid grid-cols-12 flex-1">
        <div className="col-span-2 border-r border-sky-400">
          <LeftSidebar />
        </div>
        <div className="col-span-8 col-start-3">
          <Outlet />
        </div>
        <div className="col-span-2 border-l border-gray-200 flex flex-col p-8">
          <span className="border-b border-gray-200">Historikk?</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
