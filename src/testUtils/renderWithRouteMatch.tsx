import { render } from '@testing-library/react';
import React, { FC, ReactNode } from 'react';
import { RecoilRoot, RecoilRootProps } from 'recoil';
import { useRouter } from 'next/router';
import Mock = jest.Mock;

const FixedTypeRecoilRoot = RecoilRoot as unknown as FC<
  RecoilRootProps & { children: ReactNode }
>;

export const renderWithRouteMatchAndRecoilRoot = (
  ui: JSX.Element,
  { path }: { path: string }
) => {
  (useRouter as Mock).mockImplementation(() => ({
    query: { slug: path.split('/').filter((str) => !!str) },
  }));

  return render(<FixedTypeRecoilRoot>{ui}</FixedTypeRecoilRoot>);
};
