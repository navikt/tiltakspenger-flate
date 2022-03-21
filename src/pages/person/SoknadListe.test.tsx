import React from 'react';
import { setupTestMockServer } from '../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import SoknadListe from './SoknadListe';
import { screen, waitFor } from '@testing-library/react';
import { paths } from '../../routes';
import { renderWithRouteMatchAndRecoilRoot } from '../../testUtils/renderWithRouteMatch';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<SoknadList />', () => {
  it('Should work', async () => {
    const route = '/person/20058126692/soknad/11701';

    renderWithRouteMatchAndRecoilRoot(<SoknadListe />, {
      path: paths.DetailsPage,
      route,
    });

    await waitFor(() => {
      expect(screen.getByText('EVANS HILPERT')).toBeInTheDocument();
    });
  });
});
