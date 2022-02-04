import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const AllTheProviders: FC = ({ children, ...rest }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
