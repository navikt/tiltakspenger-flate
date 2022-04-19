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

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ApplicationListPage', () => {
  it('Should fetch applications when opened', async () => {
    render(<ApplicationListPage />);
    await waitFor(() => {
      screen.getByText('HILPERT EVANS');
    });

    expect(screen.getByText('02079538755')).toBeInTheDocument();
    expect(screen.getAllByText('01.02.22-31.07.22').length).toBeGreaterThan(0);
  });
});
