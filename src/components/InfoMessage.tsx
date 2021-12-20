import React from 'react';
import { Error } from '@navikt/ds-icons';

const InfoMessage = () => {
  const currentColor = '#FF0000';
  return (
    <div className="border border-red-400  bg-red-200 h-9">
      <Error fill={currentColor} />
    </div>
  );
};

export default InfoMessage;
