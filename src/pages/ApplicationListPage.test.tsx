import React from 'react';
import { setupTestMockServer } from '../mocks/setupTestMock';
import '@testing-library/jest-dom';
import ApplicationListPage from './ApplicationListPage';
import { render } from 'test-utils';
import { screen, waitFor } from '@testing-library/react';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ApplicationListPage', () => {
  it('Should fetch applications when opened', async () => {
    render(<ApplicationListPage />);
    await waitFor(() => screen.getByText('GØYAL TAREMEL'));
    expect(screen.getByText('SIERRA DAUGHERTY')).toBeInTheDocument();
    expect(screen.getByText('EVANS HILPERT')).toBeInTheDocument();
  });
});
