import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Timelines from '../components/timeline/Timelines';
import { Soknad } from '../api/soknad';
import LeftSidebar from './person/LeftSidebar';

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
        <div className="col-span-10 col-start-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
