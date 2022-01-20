import React, { FC } from 'react';

export type Datoer = {
  fom: string | null;
  tom: string | null;
};

const Periode: FC<Datoer> = (datoer) => {
  return (
    <div className="flex place-content-evenly">
      {datoer.fom + ' - ' + datoer.tom}
    </div>
  );
};

export default Periode;
