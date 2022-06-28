import React from 'react';
import { Button } from '@navikt/ds-react';
import { Skeleton } from 'antd';

interface Props {
  isLoading: boolean;
}

const ActionPanel = ({ isLoading }: Props) => {
  return (
    <div className="m-8">
      <div className="mb-4 flex flex-col items-start">
        <h1 className="font-bold text-lg">Saksbehandling</h1>
        <span className="text-md mb-4">Forslag til innvilgelse 11-12-12</span>
        {isLoading ? (
          <Skeleton.Button size={'large'}></Skeleton.Button>
        ) : (
          <Button variant={'secondary'}>Godta forslaget</Button>
        )}
      </div>
    </div>
  );
};

export default ActionPanel;
