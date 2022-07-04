import React from 'react';
import YtelserSection from './YtelserSection';
import SoknadSection from './soknad/SoknadSection';

const PersonInfo = () => {
  return (
    <div className="flex flex-col items-strech ">
      <div className="self-stretch flex mb-16">
        <YtelserSection />
        <div className="border-l border-gray-200 flex flex-col flex-1">
          <SoknadSection />
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
