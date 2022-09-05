import React from 'react';
import { setupTestMockServer } from '../../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import { screen, waitFor, within } from '@testing-library/react';
import { renderWithRouteMatchAndRecoilRoot } from '../../../testUtils/renderWithRouteMatch';
import SoknadSection from './SoknadSection';

const server = setupTestMockServer();

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: { slug: ['person', '0', 'soknad', '0'] },
    mock: true,
  })),
}));

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Skip test, SoknadSection is not currently used
describe.skip('<SoknadSection />', () => {
  it('Should show kvp (true) and inst (none)', async () => {
    const path = '/person/20058126692/soknad/136950219';
    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, { path });

    await waitFor(() => {
      expect(screen.getByText('Søknad: JOBBK')).toBeInTheDocument();

      const kvpContainer = screen.getByText('Kvalifiseringsprogrammet')
        .parentNode as HTMLElement;
      expect(within(kvpContainer).getByText('Ja')).toBeInTheDocument();

      const instContainer = screen.getByText('Opphold på instutisjon')
        .parentNode as HTMLElement;
      expect(within(instContainer).getByText('Nei')).toBeInTheDocument();
    });
  });

  it('Should show kvp (false) and inst (Barnevern)', async () => {
    const path = '/person/20058126692/soknad/136950210';
    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, { path });

    await waitFor(() => {
      expect(screen.getByText('Søknad: AMO')).toBeInTheDocument();

      const kvpContainer = screen.getByText('Kvalifiseringsprogrammet')
        .parentNode as HTMLElement;
      expect(within(kvpContainer).getByText('Nei')).toBeInTheDocument();

      const instContainer = screen.getByText('Opphold på instutisjon')
        .parentNode as HTMLElement;
      expect(within(instContainer).getByText('Barnevern')).toBeInTheDocument();
    });
  });

  it('Should show tiltaks-arragoer and tiltaks-type (Klaras kaker)', async () => {
    const path = '/person/20058126692/soknad/136950210';
    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, { path });

    await waitFor(() => {
      expect(screen.getByText('Søknad: AMO')).toBeInTheDocument();

      const kvpContainer = screen.getByText('Tiltak').parentNode as HTMLElement;
      expect(
        within(kvpContainer).getByText('Klaras kaker AS')
      ).toBeInTheDocument();
      expect(within(kvpContainer).getByText('JOBBK')).toBeInTheDocument();
    });
  });
  it('Should show tiltaks-arragoer and tiltaks-type (Jobbsporet)', async () => {
    const path = '/person/20058126692/soknad/136950219';
    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, { path });

    await waitFor(() => {
      expect(screen.getByText('Søknad: AMO')).toBeInTheDocument();

      const kvpContainer = screen.getByText('Tiltak').parentNode as HTMLElement;
      expect(
        within(kvpContainer).getByText('Jobbsporet AS')
      ).toBeInTheDocument();
      expect(within(kvpContainer).getByText('AMO')).toBeInTheDocument();
    });
  });
});
