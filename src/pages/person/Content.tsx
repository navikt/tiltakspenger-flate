import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import SoknadContent from './SoknadContent';
import SoknadListe from './SoknadListe';
import YtelserSection from './YtelserSection';

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col items-strech ">
      <div className="self-stretch flex mb-16">
        <YtelserSection />
        <div className="border-l border-gray-200 flex flex-col flex-1">
          <Spinner isLoading={isLoading}>
            <SoknadListe />
            <SoknadContent />
          </Spinner>
        </div>
      </div>
    </div>
  );
};

export default Content;
