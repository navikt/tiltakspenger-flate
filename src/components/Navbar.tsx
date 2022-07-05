import { Dropdown, Header } from '@navikt/ds-react-internal';
import { ExternalLink, System } from '@navikt/ds-icons';
import React from 'react';
import { SearchBar } from './SearchBar';
import { useAddAlert, useRemoveAlert } from '../state/alerts';
import { isValidFnr } from './fnrValidation';
import { basePath } from '../routes';
import { useRouter } from 'next/router';

const Navbar = () => {
  const addAlert = useAddAlert();
  const removeAlert = useRemoveAlert();
  const router = useRouter();
  const goToHome = () => router.push(basePath);

  const onSearch = async (personId: string): Promise<void> => {
    const key = 'ugyldig-søk';
    removeAlert(key);

    if (!isValidFnr(personId)) {
      addAlert({
        key: key,
        message: `"${personId}" er ikke et gyldig fødselsnummer`,
        type: 'error',
        ephemeral: true,
      });
      return Promise.reject('Invalid ident');
    } else {
      router.push(`/person/${personId}`);
      return;
    }
  };

  return (
    <Header>
      <Header.Title onClick={goToHome} className="cursor-pointer">
        NAV tiltakspenger
      </Header.Title>
      <SearchBar onSearch={onSearch} />
      <Dropdown>
        <Header.Button as={Dropdown.Toggle} style={{ marginLeft: 'auto' }}>
          <System title="Systemer og oppslagsverk" />
        </Header.Button>
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item>
              <a
                className="flex"
                href="https://arbeid-og-inntekt.nais.adeo.no/api/v2/redirect/sok/a-inntekt"
              >
                <span className="mr-2">A-inntekt</span>
                <ExternalLink />
              </a>
            </Dropdown.Menu.List.Item>
            <Dropdown.Menu.List.Item>
              <a className="flex" href="https://gosys.intern.nav.no/gosys">
                <span className="mr-2">Gosys</span>
                <ExternalLink />
              </a>
            </Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
      <Header.User name="Sylte Agurk" />
    </Header>
  );
};

export default Navbar;
