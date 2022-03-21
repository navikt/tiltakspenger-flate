import React from 'react';
import { Alert } from 'antd';

const YtelserSection = () => {
  return (
    <div className="w-96">
      <Alert
        type="info"
        showIcon
        description="Vi viser foreløpig kun informasjon om ytelser fra Arena innenfor søknadsperioden"
      />
      <h1 className="ml-8 mt-4 text-left font-bold text-lg">Ytelser</h1>
      <div className="text-left pl-8 text-base space-y-6">
        <div>
          <div className="text-gray-300">Arbeidsavklaringspenger</div>
          <div className="font-bold">Nei</div>
        </div>
        <div>
          <div className="text-gray-300">Dagpenger</div>
          <div className="font-bold">01.10.21-15.12.21</div>
        </div>
        <div>
          <div className="text-gray-300">Tiltakspenger</div>
          <div className="font-bold">Nei</div>
        </div>
      </div>
    </div>
  );
};

export default YtelserSection;
