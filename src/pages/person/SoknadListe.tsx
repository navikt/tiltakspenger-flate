import React, { useEffect } from 'react';
import { useRequest } from '../../api/common';
import { getSoknader, Soknad } from '../../api/soknad';
import { Link, useParams } from 'react-router-dom';
import { personPath } from '../../routes';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../state/soknad';

const SoknadListe = () => {
  const { fnr, soknadId } = useParams<{ fnr: string; soknadId: string }>();
  const {
    run: runGetSoknader,
    result,
    isLoading,
  } = useRequest(() => getSoknader(fnr || ''));

  useEffect(() => {
    runGetSoknader();
  }, []);

  const [soknader, setSoknader] = useRecoilState(soknadState);

  useEffect(() => {
    if (!result) return;
    setSoknader(result?.data || []);
  }, [result]);

  const isSelected = (soknad: Soknad): boolean =>
    soknad.id?.toString() === soknadId?.toString();

  return (
    <ul className="flex">
      {(soknader || []).map((soknad, i) => (
        <li
          key={i}
          className={`flex w-52 border-b-4 text-center ${
            isSelected(soknad) ? ' border-blue-400 ' : ' border-gray-100 '
          }`}
        >
          <Link
            className={'flex-1 p-2 text-center text-base text-black'}
            to={personPath({
              fnr: soknad.ident,
              soknadId: soknad.id.toString(),
            })}
          >{`${soknad.fornavn} ${soknad.etternavn}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SoknadListe;
