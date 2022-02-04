import React, { FC, useEffect } from 'react';
import { useRequest } from '../../api/common';
import { getSoknader } from '../../api/soknad';
import { Link, useParams } from 'react-router-dom';
import { personPath } from '../../routes';
import Spinner from '../../components/Spinner';

const SoknadListe = () => {
  const { run, result, isLoading } = useRequest(() => getSoknader());
  const { fnr, soknadId } = useParams<{ fnr: string; soknadId: string }>();

  useEffect(() => {
    run();
  }, []);

  const soknader = result?.data?.filter((soknad) => soknad.ident === fnr) || [];

  return (
    <div className="flex flex-col items-start mb-8 pl-4 pt-5">
      <h1 className="text-base font-bold">Soknader</h1>
      <Spinner isLoading={isLoading}>
        <ul className="self-stretch items-stretch">
          {soknader.map((soknad, i) => (
            <li
              key={i}
              className={
                'flex first:border-t-2 border-b-2 border-gray-200 bg-gray-100'
              }
            >
              <Link
                className={
                  'flex-1 p-2 text-left   text-black ' +
                  (soknad.id.toString() === soknadId?.toString()
                    ? 'font-bold bg-white font-black relative left-1 '
                    : '')
                }
                to={personPath({
                  fnr: soknad.ident,
                  soknadId: soknad.id.toString(),
                })}
              >{`${soknad.brukerStartDato} - ${soknad.brukerSluttDato}`}</Link>
            </li>
          ))}
        </ul>
      </Spinner>
    </div>
  );
};

export default SoknadListe;
