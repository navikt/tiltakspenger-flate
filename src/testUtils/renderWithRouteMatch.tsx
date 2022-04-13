import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React, { FC, ReactNode } from 'react';
import { RecoilRoot, RecoilRootProps } from 'recoil';

const FixedTypeRecoilRoot = RecoilRoot as unknown as FC<
  RecoilRootProps & { children: ReactNode }
>;

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

export const renderWithRouteMatchAndRecoilRoot = (
  ui: JSX.Element,
  { path, route }: { route: string; path: string }
) => {
  return render(
    <FixedTypeRecoilRoot>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={'/'} element={<h1>Fallback</h1>} />
          <Route path={path} element={ui} />
        </Routes>
      </MemoryRouter>
    </FixedTypeRecoilRoot>
  );
};
