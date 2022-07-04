import React from 'react';
import BehandlingsTag, { Behandling } from '../../components/BehandlingsTag';

const TiltakSection = () => {
  return (
    <>
      <div className="border-b border-gray-200 flex justify-between py-4 m-4">
        <span className=" flex">
          <BehandlingsTag behandling={Behandling.Forlengelse} />
        </span>
      </div>
      <div className="flex space-y-6 flex-col items-start text-left mt-4 p-4">
        <h1 className="text-base font-bold -mb-1">Registrerte tiltak</h1>
        <div>
          <div>Arbeidstrening</div>
          <div>Oslo kommune Bydel X</div>
          <div>15.03.22-31.08.22</div>
          <div>60% - 3 dager</div>
          <div>
            Status: <span className="font-bold">Gjennomføres</span>
          </div>
        </div>
        <div>
          <div>Arbeidstrening</div>
          <div>Oslo kommune Bydel X</div>
          <div>15.03.22-31.08.22</div>
          <div>60% - 3 dager</div>
          <div>
            Status: <span className="font-bold">Gjennomføres</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiltakSection;
