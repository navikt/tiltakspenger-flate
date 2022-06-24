import { atom, selector } from 'recoil';
import { PersonDTO } from '../../generated';

export const personState = atom<PersonDTO | undefined>({
  key: 'person',
  default: undefined,
});

// TODO: Use selected behandling, not first
export const vilkarsKategoriState = selector({
  key: 'vilkaar',
  get: ({ get }) => get(personState)?.behandlinger[0]?.vurderinger || [],
});
