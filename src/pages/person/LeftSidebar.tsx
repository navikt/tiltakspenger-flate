import React from 'react';
import BehandlingsTag, { Behandling } from '../../components/BehandlingsTag';
import SoknadListe from './SoknadListe';

const LeftSidebar = () => {
  return (
    <>
      <div className="border-b border-gray-200 flex justify-between py-4 m-4">
        <span className=" flex">
          <BehandlingsTag behandling={Behandling.Forlengelse} />
        </span>
      </div>
      <div className="flex flex-col items-start mt-4 p-4">
        <h1 className="text-base font-bold text-left">Tiltak</h1>
        <div>AMO kurs 100%</div>
        <div>Klaras kaker</div>
        <div>11.12.93-12.11.93</div>
        <div>Status: gjennomføres</div>
      </div>
      <div role={'button'} className="flex flex-col items-start mt-4 p-4">
        <h1 className="text-base font-bold text-left">Barn</h1>
        <div>AMO kurs 100%</div>
        <div>Klaras kaker</div>
        <div>11.12.93-12.11.93</div>
        <div>Status: gjennomføres</div>
      </div>
    </>
  );
};

export default LeftSidebar;
