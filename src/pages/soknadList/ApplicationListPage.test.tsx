import React from 'react';
import { setupTestMockServer } from '../../mocks/setupTestMock';
import '@testing-library/jest-dom';
import ApplicationListPage from './ApplicationListPage';
import { render } from 'test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';

const server = setupTestMockServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ApplicationListPage', () => {
  it('Should fetch applications when opened', async () => {
    render(<ApplicationListPage />);
    await waitFor(() => {
      screen.getByText('HILPERT EVANS');
    });

    expect(screen.getByText('02079538755')).toBeInTheDocument();
    expect(screen.getAllByText('01.02.22-31.07.22').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Klaras kaker').length).toBeGreaterThan(0);
  });

  it('Should show processed applications when clicking processed tab', async () => {
    render(<ApplicationListPage />);
    await waitFor(() => screen.getByText('EVANS HILPERT'));
    fireEvent.click(screen.getAllByText('Behandlet')[0]);
    expect(screen.getByText('DINO GOODWIN')).toBeInTheDocument();
    expect(screen.getAllByText('Klaras kaker')[0]).toBeInTheDocument();
    expect(screen.queryByText('EVANS HILPERT')).not.toBeInTheDocument();
  });
});
