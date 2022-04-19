import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Timelines from '../../components/timeline/Timelines';
import TiltakSection from './TiltakSection';

const PersonPage = () => {
  return (
    <div className="flex flex-col bg-gray-150">
      <Breadcrumbs />
      <Timelines />
      <div className="grid grid-cols-12 flex-1">
        <div className="col-span-2 border-sky-400">
          <TiltakSection />
        </div>
        <div className="col-span-10 col-start-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
