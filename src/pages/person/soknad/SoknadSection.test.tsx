import React from 'react';
import { setupTestMockServer } from '../../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { paths } from '../../../routes';
import { renderWithRouteMatchAndRecoilRoot } from '../../../testUtils/renderWithRouteMatch';
import SoknadSection from './SoknadSection';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<SoknadSection />', () => {
  it('Should work', async () => {
    const route = '/person/20058126692/soknad/11701';

    renderWithRouteMatchAndRecoilRoot(<SoknadSection />, {
      path: paths.DetailsPage,
      route,
    });

    await waitFor(() => {
      expect(screen.getByText('EVANS HILPERT')).toBeInTheDocument();
    });
  });
});
