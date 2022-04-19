import React from 'react';
import { setupTestMockServer } from '../../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import { screen, waitFor, within } from '@testing-library/react';
import { paths } from '../../../routes';
import { renderWithRouteMatchAndRecoilRoot } from '../../../testUtils/renderWithRouteMatch';
import SoknadSection from './SoknadSection';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<SoknadSection />', () => {
  it('Should show kvp (true) and inst (none)', async () => {
    const route = '/person/20058126692/soknad/136950219';

    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, {
      path: `${paths.PersonPage.replace('*', '')}${paths.Content}`,
      route,
    });

    await waitFor(() => {
      expect(screen.getByText('EVANS HILPERT')).toBeInTheDocument();

      const kvpContainer = screen.getByText('Kvalifiseringsprogrammet')
        .parentNode as HTMLElement;
      expect(within(kvpContainer).getByText('Ja')).toBeInTheDocument();

      const instContainer = screen.getByText('Opphold på instutisjon')
        .parentNode as HTMLElement;
      expect(within(instContainer).getByText('Nei')).toBeInTheDocument();
    });
  });

  it('Should show kvp (false) and inst (Barnevern)', async () => {
    const route = '/person/20058126692/soknad/136950210';

    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, {
      path: `${paths.PersonPage.replace('*', '')}${paths.Content}`,
      route,
    });

    await waitFor(() => {
      expect(screen.getByText('Liten Salat')).toBeInTheDocument();

      const kvpContainer = screen.getByText('Kvalifiseringsprogrammet')
        .parentNode as HTMLElement;
      expect(within(kvpContainer).getByText('Nei')).toBeInTheDocument();

      const instContainer = screen.getByText('Opphold på instutisjon')
        .parentNode as HTMLElement;
      expect(within(instContainer).getByText('Barnevern')).toBeInTheDocument();
    });
  });
});
