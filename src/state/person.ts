import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

import { getPerson, PersonState } from '../api/person';

const setLoadingPerson: () => void = () => {
  false;
};

export const fetchPerson = (id: string) => {
  return getPerson(id);
};

export const personState = atom<PersonState | undefined>({
  key: 'personState',
  default: undefined,
});

export const useFetchPerson = () => {
  const setPerson = useSetRecoilState(personState);

  return (id: string) => {
    setPerson(undefined);

    return fetchPerson(id);
  };
};
