import React, { FC, ReactElement } from 'react';

const Spinner: FC<{ isLoading: boolean }> = ({ isLoading, children }) => {
  return isLoading ? <div>Loading ...</div> : (children as ReactElement);
};

export default Spinner;
