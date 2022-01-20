import React from 'react';
import { setupTestMockServer } from '../mocks/setupTestMock';
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
    await waitFor(() => screen.getByText('GENE ARMSTRONG'));
    expect(screen.getAllByText('Klaras brød')[0]).toBeInTheDocument();
  });

  it('Should show processed applications when clicking processed tab', async () => {
    render(<ApplicationListPage />);
    await waitFor(() => screen.getByText('GENE ARMSTRONG'));
    fireEvent.click(screen.getAllByText('Behandlet')[0]);
    expect(screen.getByText('DINO GOODWIN')).toBeInTheDocument();
    expect(screen.getAllByText('Klaras kaker')[0]).toBeInTheDocument();
  });
});
