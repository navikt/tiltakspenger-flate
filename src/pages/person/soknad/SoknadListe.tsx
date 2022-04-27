import React from 'react';
import { Soknad } from '../../../api/soknad';
import { Link, useParams } from 'react-router-dom';
import { personPath } from '../../../routes';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../../state/soknad';

const SoknadListe = () => {
  const { soknadId } = useParams<{ fnr: string; soknadId: string }>();
  const [soknader] = useRecoilState(soknadState);
  const isSelected = (soknad: Soknad): boolean =>
    soknad.id?.toString() === soknadId?.toString();

  if (soknader?.length === 0) {
    return <h1 className="text-base font-bold mt-4">Ingen søknader funnet</h1>;
  }

  return (
    <ul className="flex border-b border-gray-200">
      {(soknader || []).map((soknad, i) => (
        <li
          key={i}
          className={`flex px-4 mx-4 border-b-4 text-center hover:border-blue-200 ${
            isSelected(soknad) ? ' border-blue-400 ' : ' border-gray-100 '
          }`}
        >
          <Link
            className={'flex-1 p-2 text-center text-base font-bold text-black'}
            to={personPath({
              fnr: soknad.ident,
              soknadId: soknad.id.toString(),
            })}
          >{`Søknad: ${soknad.tiltaksType}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SoknadListe;
