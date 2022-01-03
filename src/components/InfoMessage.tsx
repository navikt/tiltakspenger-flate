import React from 'react';
import { Error } from '@navikt/ds-icons';
import { useRecoilState } from 'recoil';
import { alertsState } from '../state/alerts';

const InfoMessage = () => {
  const currentColor = '#FF0000';
  const [alerts] = useRecoilState(alertsState);
  console.log(alerts);
  return (
    <div className="border border-red-400  bg-red-200 h-9">
      <Error fill={currentColor} />
    </div>
  );
};

export default InfoMessage;
