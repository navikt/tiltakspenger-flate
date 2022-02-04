import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

export const renderWithRouteMatch = (
  ui: JSX.Element,
  { path, route }: { route: string; path: string }
) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path={'/'} element={<h1>Fallback</h1>} />
        <Route path={path} element={ui} />
      </Routes>
    </MemoryRouter>
  );
};
