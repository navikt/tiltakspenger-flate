import React from 'react';
import { Button } from '@navikt/ds-react';

const ActionPanel = () => {
  return (
    <div className="m-8">
      <div className="mb-4 flex flex-col items-start">
        <h1 className="font-bold text-lg">Saksbehandling</h1>
        <span className="text-md mb-4">Forslag til innvilgelse 11-12-12</span>
        <Button variant={'secondary'}>Godta forslaget</Button>
      </div>
    </div>
  );
};

export default ActionPanel;
