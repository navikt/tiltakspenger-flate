import React from 'react';
import CopyableText from './CopyableText';

const Divider = () => {
  return <div>{'/'}</div>;
};

const Breadcrumbs = () => {
  return (
    <div className="flex p-16 space-x-16">
      <div className="font-bold">Sigurd Grøneng</div>
      <Divider />
      <CopyableText text={'121212 12121'} />
      <Divider />
      <CopyableText text={'Sak-id: 9320293'} />
      <Divider />
      <div>Boenhet: 0220 (Asker)</div>
    </div>
  );
};

export default Breadcrumbs;
