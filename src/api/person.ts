import { backendUrl, HTTP } from './common';

export interface PersonState {
  problems?: Error[];
  fnr?: string;
  fornavn?: string;
  etternavn?: string;
}

export const getPerson = (id: string) => {
  //HTTP.GET(`${backendUrl}/person/sok`, {id});
  const p: PersonState = {
    fnr: '123456789',
    fornavn: 'Klara',
    etternavn: 'Helgemo',
  };
  return p;
};

export const findPerson = (fnr: string) => {
  return HTTP.GET(`${backendUrl}/api/person?fnr=${fnr}`);
};
