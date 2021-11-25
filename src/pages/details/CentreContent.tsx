import React from 'react';
import { getSoknader } from '../../api/soknad';

const CentreContent = () => {
  const soknadsdata = getSoknader();
  return <div>Her kommer soknadsdata</div>;
};

export default CentreContent;
