import React from 'react';
import { setupTestMockServer } from '../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import ApplicationListPage from './ApplicationListPage';
import { render } from 'test-utils';
import { screen, waitFor } from '@testing-library/react';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Skip test, ApplicationList is not currently used
describe.skip('ApplicationListPage', () => {
  it('Should fetch applications when opened', async () => {
    render(<ApplicationListPage />);
    await waitFor(() => {
      screen.getByText('HILPERT EVANS');
    });

    expect(screen.getAllByText('14038205537').length).toBeGreaterThan(0);
    expect(screen.getAllByText('01.02.22-31.07.22').length).toBeGreaterThan(0);
  });
});
