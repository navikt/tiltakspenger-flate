import React, { FC } from 'react';
import { Soknad } from '../../api/soknad';

interface Props {
  soknad: Soknad;
}

const JaNeiChip: FC<{ value: boolean }> = ({ value }) => {
  return (
    <span
      className={`border px-2 rounded-md ${
        value ? 'border-sky-400 bg-sky-200' : 'bg-red-200 border-red-400'
      }`}
    >
      {value ? 'Ja' : 'Nei'}
    </span>
  );
};

const CentreContent: FC<Props> = ({ soknad }) => {
  const {
    KVP,
    institusjonsopphold,
    tiltaksType,
    pensjonEtterlønn,
    tiltaksadresse,
    tiltakspostnummer,
    tiltaksdagerPerUke,
    tiltaksarrangorNavn,
  } = soknad;

  return (
    <div className="flex space-x-8">
      <div className="space-y-4 border-2 border-gray-200 shadow-xl p-4 rounded-md">
        <h1 className="text-lg">Soknad</h1>
        <div className="flex">
          <span className="font-bold mr-4">Kvalifiseringsprogrammet:</span>
          <JaNeiChip value={KVP} />
        </div>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Institusjonsopphold:</span>
          <JaNeiChip value={institusjonsopphold} />
        </div>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Tiltakstype:</span>
          <span>{tiltaksType}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Kvalifiseringsprogrammet:</span>
          <JaNeiChip value={pensjonEtterlønn} />
        </div>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Pensjon/etterlønn:</span>
          <JaNeiChip value={pensjonEtterlønn} />
        </div>
      </div>
      <div className="shadow-xl p-4 rounded-md border-gray-200 border-2 space-y-4">
        <h1>Tiltak</h1>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Navn:</span>
          <span>{tiltaksarrangorNavn}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Adresse:</span>
          <span>{tiltaksadresse + ' ' + tiltakspostnummer}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold mr-4">Dager i uken:</span>
          <span>{tiltaksdagerPerUke}</span>
        </div>
      </div>
    </div>
  );
};

export default CentreContent;
