import React, { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RecoilRoot, RecoilRootProps } from 'recoil';

const FixedTypeRecoilRoot = RecoilRoot as unknown as FC<
  RecoilRootProps & { children: ReactNode }
>;

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <FixedTypeRecoilRoot>{children}</FixedTypeRecoilRoot>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
