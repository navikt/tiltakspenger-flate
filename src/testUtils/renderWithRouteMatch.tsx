import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React, { FC, ReactNode } from 'react';
import { RecoilRoot, RecoilRootProps } from 'recoil';
import * as nextRouter from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

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
  const { useRouter } = nextRouter;
  return render(<FixedTypeRecoilRoot>{ui}</FixedTypeRecoilRoot>);
};
