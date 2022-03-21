import { Loader } from '@navikt/ds-react';
import React, { FC, ReactElement } from 'react';

const Spinner: FC<{ isLoading: boolean }> = ({ isLoading, children }) => {
  return isLoading ? (
    <div className="mt-8">
      <Loader size="xlarge" />
    </div>
  ) : (
    (children as ReactElement)
  );
};

export default Spinner;
