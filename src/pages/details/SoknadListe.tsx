import React from 'react';
import soknad from '../../mocks/soknad';

const soknader = [
  'Soknad 1 - 12.12.12',
  'Soknad 2 - 11.12.12',
  'Soknad 3 - 31.11.12',
];

const SoknadListe = () => {
  return (
    <div className="flex flex-col items-start mb-8 pl-4 pt-4">
      <h1 className="text-base font-bold">Soknader</h1>
      <ul className="self-stretch">
        {soknader.map((soknad, i) => (
          <li
            key={i}
            className={
              'p-2 text-left border-b-2 bg-gray-100 border-gray-200 ' +
              (i === 1 ? 'font-bold bg-white  relative left-1' : '')
            }
          >
            {soknad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoknadListe;
