import React from 'react';
import CopyableText from './CopyableText';

const Breadcrumbs = () => {
  return (
    <div className="flex p-16 space-x-16 items-center bg-gray-100">
      <div className="font-bold">Sigurd Grøneng</div>
      <CopyableText text={'121212 12121'} />
      <div>Boenhet: 0220 (Asker)</div>
    </div>
  );
};

export default Breadcrumbs;
