import React, { useEffect, useState } from 'react';
import { Alert } from '@navikt/ds-react';
import Spinner from '../../components/Spinner';

const YtelserSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <div className="w-96">
      <Spinner isLoading={isLoading}>
        <Alert variant="info">
          Vi viser foreløpig kun informasjon om ytelser fra Arena innenfor
          søknadsperioden
        </Alert>
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
      </Spinner>
    </div>
  );
};

export default YtelserSection;
