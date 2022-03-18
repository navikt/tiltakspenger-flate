import { atom } from 'recoil';
import { Soknad } from '../api/soknad';

export const soknadState = atom<Soknad[] | undefined>({
  key: 'soknader',
  default: undefined,
});
