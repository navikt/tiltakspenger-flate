import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

import { getPerson, PersonState } from '../api/person';

const setLoadingPerson: () => void = () => {
  false;
};

export const fetchPerson = (id: string): Promise<{}> =>
  getPerson(id)
    .then(async ({ etternavn }) => {
      return {};
    })
    .catch((error) => {
      switch (error.statusCode) {
        case 404:
          return Promise.reject({
            message:
              'Personen har ingen perioder til godkjenning eller tidligere utbetalinger i Speil',
            type: 'info',
          });
        case 401:
          return Promise.reject({
            message: 'Du må logge inn for å utføre søk',
            type: 'feil',
          });
        case 403:
          return Promise.reject({
            message: 'Du har ikke tilgang til å søke opp denne personen',
            type: 'info',
          });
        default:
          console.error(error);
          return Promise.reject({
            message: 'Kunne ikke utføre søket. Prøv igjen senere',
            type: 'feil',
          });
      }
    });

export const personState = atom<PersonState | undefined>({
  key: 'personState',
  default: undefined,
});

export const useHentPerson = () => {
  const setPerson = useSetRecoilState(personState);

  return (id: string) => {
    setPerson(undefined);

    return hentPerson(id)
      .then((res) => {
        // @ts-ignore
        setPerson(res);
        return res;
      })
      .finally(() => setLoadingPerson());
  };
};
