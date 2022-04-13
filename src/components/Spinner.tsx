import { Loader } from '@navikt/ds-react';
import React, { FC, ReactNode } from 'react';

const Spinner: FC<{ isLoading: boolean; children: ReactNode }> = ({
  isLoading,
  children,
}) => {
  return isLoading ? (
    <div className="mt-8">
      <Loader size="xlarge" />
    </div>
  ) : (
    <>{children}</>
  );
};

export default Spinner;
