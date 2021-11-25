import React, { useEffect, useState } from 'react';
import { getSoknader, Soknad } from '../../api/soknad';

const CentreContent = () => {
  const [data, setData] = useState<Soknad[] | undefined>();
  useEffect(() => {
    getSoknader().then((soknadsdata) => {
      setData(soknadsdata);
    });
  }, []);

  console.log('data' + data);

  return <div>{JSON.stringify(data)}</div>;
};

export default CentreContent;
