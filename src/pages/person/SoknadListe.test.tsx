import React from 'react';
import { setupTestMockServer } from '../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import SoknadListe from './SoknadListe';
import { screen, waitFor } from '@testing-library/react';
import { paths } from '../../routes';
import { renderWithRouteMatch } from '../../testUtils/renderWithRouteMatch';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<SoknadList />', () => {
  it('Should work', async () => {
    const route = '/person/20058126692/soknad/11701';

    renderWithRouteMatch(<SoknadListe />, {
      path: paths.DetailsPage,
      route,
    });

    expect(screen.getByText('Soknader')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('03.01.22 - 31.05.22')).toBeInTheDocument();
    });
    expect(screen.getByText('02.01.22 - 31.05.22')).toBeInTheDocument();
  });
});
