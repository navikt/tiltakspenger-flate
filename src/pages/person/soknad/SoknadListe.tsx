import React from 'react';
import { Soknad } from '../../../api/soknad';
import { personPath } from '../../../routes';
import { useRecoilState } from 'recoil';
import { soknadState } from '../../../state/soknad';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SoknadListe = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const soknadId = slug ? slug[2] : undefined;
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
            href={personPath({
              fnr: soknad.ident,
              soknadId: soknad.id.toString(),
            })}
          >
            <a
              className={'p-2 text-center text-base font-bold text-black'}
            >{`Søknad: ${soknad.tiltaksType}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SoknadListe;
