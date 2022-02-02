import React, { FC } from 'react';

const Spinner: FC<{ isLoading: boolean }> = ({ isLoading, children }) => {
  return isLoading ? <div>Loading ...</div> : children;
};

export default Spinner;
