import { atom, selector } from 'recoil';
import { Person } from "generated";

export const personState = atom<Person | undefined>({
  key: 'person',
  default: undefined,
});

export const behandlingsState = selector({
  key: 'behandling',
  get: ({ get }) => get(personState)?.behandlinger[0],
});

// TODO: Use selected behandling, not first
export const vilkarsKategoriState = selector({
  key: 'vilkaar',
  get: ({ get }) => get(behandlingsState)?.vurderinger || [],
});

export const barnState = selector({
  key: 'barn',
  get: ({ get }) => get(personState)?.personalia?.barn || [],
});

export const tiltakState = selector({
  key: 'tiltak',
  get: ({ get }) => get(behandlingsState)?.tiltak,
});
